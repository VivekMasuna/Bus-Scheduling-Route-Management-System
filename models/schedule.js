const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Crew', required: true },
    conductor: { type: mongoose.Schema.Types.ObjectId, ref: 'Crew', required: true },
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    schedule_time: {
        start_time: { type: String, required: true },
        end_time: { type: String, required: true }
    },
    status: { type: String, enum: ['Scheduled', 'In Progress', 'Completed', 'Cancelled'], default: 'Scheduled' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Route', ScheduleSchema);
