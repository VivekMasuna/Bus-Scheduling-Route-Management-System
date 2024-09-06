const moment = require('moment');

module.exports.scheduleBusAndCrew = async (routeId, startTimeStr, endTimeStr, Route, Crew, Bus, Schedule) => {
    try {
        const parseTime = (timeStr) => {
            return moment(timeStr, 'hh:mm A').toDate();
        };

        const startTime = parseTime(startTimeStr);
        const endTime = parseTime(endTimeStr);

        if (!startTime || !endTime || isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
            throw new Error('Invalid start time or end time provided!');
        }

        const route = await Route.findById(routeId);
        if (!route) throw new Error("Route not found!");

        const availableDriver = await Crew.findOne({ 
            role: 'Driver', 
            is_active: false, 
            on_duty: true,
            depot_location: route.origin 
        });
        
        const availableConductor = await Crew.findOne({ 
            role: 'Conductor', 
            is_active: false, 
            on_duty: true,
            depot_location: route.origin
        });

        if (!availableDriver || !availableConductor) {
            throw new Error('No available driver or conductor for this route!');
        }

        const availableBus = await Bus.findOne({ 
            active: false, 
            current_location: route.origin 
        });

        if (!availableBus) {
            throw new Error('No available bus for this route!');
        }

        const newSchedule = new Schedule({
            bus: availableBus._id,
            driver: availableDriver._id,
            conductor: availableConductor._id,
            route: route._id,
            schedule_time: {
                start_time: startTime,
                end_time: endTime
            },
            status: 'Scheduled'
        });

        await newSchedule.save();

        availableBus.active = true;
        await availableBus.save();

        availableDriver.is_active = true;
        availableDriver.duty_start_times.push(startTime);
        availableDriver.duty_end_times.push(endTime);
        availableDriver.notifications.push({
            message: `You have been scheduled for duty on Route ${route.route_no} from ${startTime} to ${endTime}.`
        });
        await availableDriver.save();

        availableConductor.is_active = true;
        availableConductor.duty_start_times.push(startTime);
        availableConductor.duty_end_times.push(endTime);
        availableConductor.notifications.push({
            message: `You have been scheduled for duty on Route ${route.route_no} from ${startTime} to ${endTime}.`
        });
        await availableConductor.save();

        console.log('Bus and crew successfully scheduled!');

    } catch (error) {
        console.error(error.message);
        throw error;
    }
};
