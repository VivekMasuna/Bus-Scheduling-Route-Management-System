const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const CrewSchema = new Schema({
    name: { type: String, required: true },
    username: { 
        type: String, 
        unique: true, 
        required: true,
        // sparse: true  // Allow nulls but still enforce uniqueness for non-null values
    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    address: { type: String, required: true },
    role: { type: String, enum: ['Driver', 'Conductor'], required: true },
    depot_location: { type: String, required: true },  // Origin depot name
    is_active: { type: Boolean, default: false },
    on_duty: { type: Boolean, default: true },
    duty_start_times: [{ type: Date }],
    duty_end_times: [{ type: Date }],
    rest_period: { type: Boolean, default: false },
    notifications: [{
        message: { type: String, required: true },
        read: { type: Boolean, default: false },
        created_at: { type: Date, default: Date.now }
    }],
    resetPasswordToken: String,
    resetPasswordExpires: Date,
}, { timestamps: true });

CrewSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Crew', CrewSchema);
