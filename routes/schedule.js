const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Route = require('../models/route');
const Crew = require('../models/crew');
const Bus = require('../models/bus');
const Schedule = require('../models/schedule');
const { scheduleBusAndCrew } = require('../algorithms/schedule.js');

router.get('/routes', wrapAsync(async (req, res) => {
    try {
        const routes = await Route.find();
        res.render('schedule/routes.ejs', { routes });
    } catch (error) {
        console.error(error);
        req.flash('error', 'Could not fetch routes');
        res.redirect('/admin');
    }
}));

router.post('/schedule', wrapAsync(async (req, res) => {
    const { route_id, start_time, end_time } = req.body;

    try {
        await scheduleBusAndCrew(route_id, start_time, end_time, Route, Crew, Bus, Schedule);
        req.flash('success', 'Bus and crew successfully scheduled!');
        res.redirect('/admin/schedules');
    } catch (error) {
        console.error(error);
        req.flash('error', error.message);
        res.redirect('/admin/routes');
    }
}));

router.get('/schedules', wrapAsync(async (req, res) => {
    try {
        const schedules = await Schedule.find()
            .populate('bus')
            .populate('driver')
            .populate('conductor')
            .populate('route');

        res.render('schedule/schedules.ejs', { schedules });
    } catch (error) {
        console.error(error);
        req.flash('error', 'Could not fetch schedules');
        res.redirect('/');
    }
}));

router.get('/routes/timing/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    try {
        const route = await Route.findById(id);
        if (!route) {
            req.flash('error', 'Route not found');
            return res.redirect('/admin/routes');
        }

        const availableDrivers = await Crew.find({
            role: 'Driver',
            is_active: false,
            on_duty: true,
            depot_location: route.origin
        });
        const availableConductors = await Crew.find({
            role: 'Conductor',
            is_active: false,
            on_duty: true,
            depot_location: route.origin
        });
        const availableBuses = await Bus.find({
            active: false,
            current_location: route.origin
        });

        res.render('schedule/timings.ejs', { route, availableDrivers, availableConductors, availableBuses });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}));

module.exports = router;
