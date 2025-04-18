const otpGenerator = require("otp-generator");

// Simple numeric OTP (6 digits)
exports.generateOtp = () => {
  return otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
};