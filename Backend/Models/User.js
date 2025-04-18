const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },

    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },

    verified: {
        type: Boolean,
        default: false,
    },

    // otp: String,
    
    // otpExpiry: Date
});

module.exports = mongoose.model("User", userSchema);