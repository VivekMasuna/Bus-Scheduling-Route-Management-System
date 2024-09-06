const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    route_no: { type: String, unique: true, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    route_stops: [{
        place: { type: String, required: true },
        lat: { type: Number },
        lon: { type: Number }
    }],
    distance: { type: Number, required: true },
    schedule: [{
        start_time: { type: String, required: true },
        end_time: { type: String, required: true }
    }],
    is_active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Route', RouteSchema,'routes');
