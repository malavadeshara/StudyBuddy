const nodemailer = require("nodemailer");

exports.sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"StudyMate 👨‍🎓" <${process.env.MAIL_USER}>`,
            to,
            subject,
            text,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent: ", info.response);
        return true;
    } catch (err) {
        console.error("❌ Failed to send email:", err.message);
        return false;
    }
};