const express = require('express');
const router = express.Router();
const { registerUser, verifyOtp, loginUser} = require('../Controllers/user.controllers');

// Route to register + send OTP
router.post('/register', registerUser);

// Route to verify OTP
router.post('/verify-otp', verifyOtp);

// Route to Login
router.post('/login', loginUser);

module.exports = router;