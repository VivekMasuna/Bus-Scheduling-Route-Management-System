const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusSchema = new Schema({
    name: { type: String, required: true },
    bus_no: { type: String, unique: true, required: true },
    active: { type: Boolean, default: false },
    condition: { type: String, enum: ['Excellent', 'Good', 'Fair', 'Poor'], required: true },
    seats: { type: Number, required: true },
    current_location: { type: String, required: true },  // Origin depot name
    last_service_date: { type: Date, default: Date.now },
    next_service_due: { type: Date },
    maintenance_status: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Bus', BusSchema);
