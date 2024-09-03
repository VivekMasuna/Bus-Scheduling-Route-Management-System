const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    route_no: { type: String, unique: true, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    route_stops: [String],
    distance: { type: Number, required: true },
    schedule: [{
        start_time: { type: String, required: true },
        end_time: { type: String, required: true }
    }],
    is_active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Route', RouteSchema);
