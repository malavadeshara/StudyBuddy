const express = require("express");
const User = require("../Models/User");
// const validator = require("validator");

exports.checkUserExist = async (email, phoneNumber) => {
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

exports.checkUserExistByEmail = async (email) => {
    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return {
                exists: true,
                message: "User with this email exists.",
                user: existingUser
            };
        } else {
            return {
                exists: false,
                message: "User with this email does not exists.",
            };
        }
    } catch(error) {
        return {
            exists: false,
            error: error.message,
        };
    }
}