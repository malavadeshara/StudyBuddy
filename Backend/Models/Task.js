const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    dueDate: {
        type: Date,
    },

    type: {
        type: String,
        enum: ["Daily", "Weekly", "Monthly"],
        default: "Daily",
    }
});

taskSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Task", taskSchema);