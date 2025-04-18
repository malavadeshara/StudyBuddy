const User = require("../Models/User");
const checkUserExist = require("../utils/user.utils");
const { generateOtp } = require("../utils/otp.utils");
const { sendEmail } = require("../utils/sendMail");
const tempUsers = require("../utils/tempStorage");

const bcrypt = require("bcrypt");
const validator = require("validator");

exports.registerUser = async (req, res, next) => {
    // fetch data from request body
    const { name, email, password, phoneNumber } = req.body;

    if (!name || !email || !password || !phoneNumber) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email",
        });
    }

    const isPasswordValid = validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minLowercase: 1,
        minSymbols: 1,
    });

    if (!isPasswordValid) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
        });
    }

    if (!validator.isMobilePhone(phoneNumber, "any", { strictMode: false })) {
        return res.status(400).json({
            success: false,
            message: "Invalid phone number",
        });
    }

    // Check if user already exists
    const { exists, message, error } = await checkUserExist(email, phoneNumber);

    if (exists) {
        return res.status(400).json({
            success: false,
            message,
        });
    }

    if (error) {
        return res.status(500).json({
            success: false,
            message: "Error while checking user",
            error,
        });
    }

    // send otp
    const otp = generateOtp();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now

    // send otp to user email
    await sendEmail(email, "Your OTP", `Your OTP is: ${otp}`);

    // hash password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to temporary memory store
    tempUsers.set(email, {
        name,
        email,
        hashedPassword,
        phoneNumber,
        otp,
        otpExpiry
    });

    console.log("Temporary user data:", tempUsers.get(email)); // Debugging line

    return res.status(200).json({
        success: true,
        message: "OTP sent to your email. Please verify to complete registration.",
    });

    next();
};

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({
            success: false,
            message: "Email and OTP are required",
        });
    }

    try {
        // 1. Check if user exists in temp storage
        const tempUser = tempUsers.get(email);

        if (!tempUser) {
            return res.status(400).json({
                success: false,
                message: "No registration request found. Please register again."
            });
        }

        // 2. Check if OTP matches
        if (tempUser.otp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        // 3. Check if OTP expired
        if (tempUser.otpExpiry < Date.now()) {
            tempUsers.delete(email);
            return res.status(400).json({ success: false, message: "OTP expired. Please register again." });
        }

        // ✅ OTP is valid
        // Now mark user as verified (optional)
        // Save verified user to DB
        const newUser = new User({
            name: tempUser.name,
            email: tempUser.email,
            password: tempUser.hashedPassword,
            phoneNumber: tempUser.phoneNumber,
            verified: true,
            // add any other fields if needed
        });

        await newUser.save();
        tempUsers.delete(email); // Clean up

        return res.status(200).json({
            success: true,
            message: "OTP verified successfully! User registered."
        });

    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};