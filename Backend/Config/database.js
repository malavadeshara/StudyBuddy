const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then( () => {
        console.log("Database connected successfully");
    }).catch ((err) => {
        console.log("Database connection failed");
        console.log(err);
        process.exit(1); // Exit the process with failure
    });
}