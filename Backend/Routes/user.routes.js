const express = require('express');
const router = express.Router();
const { registerUser, verifyOtp } = require('../controllers/user.controllers');

// Route to register + send OTP
router.post('/register', registerUser);

// Route to verify OTP
router.post('/verify-otp', verifyOtp);

module.exports = router;
