const express = require("express");
const User = require("../Models/User");
// const validator = require("validator");

const checkUserExist = async (email, phoneNumber) => {
    try {
        const existingUser = await User.findOne({
            $or: [{ email }, { phoneNumber }]
        });

        if (existingUser) {
            return {
                exists: true,
                message: "User with this email or phone number already exists.",
            };
        } else {
            return { exists: false };
        }
    } catch (err) {
        return {
            exists: false,
            error: err.message,
        };
    }
};

module.exports = checkUserExist;