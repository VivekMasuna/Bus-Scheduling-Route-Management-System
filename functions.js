const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

module.exports.sendVerificationEmail = async (to, code) => {
    const mailOptions = {
        to,
        from: process.env.EMAIL_USER,
        subject: 'Email Verification',
        text: `Your verification code is ${code}`
    };

    for (let i = 0; i < 3; i++) { // retry 3 times
        try {
            await transporter.sendMail(mailOptions);
            return;
        } catch (error) {
            console.error(`Attempt ${i + 1} to send email failed:`, error);
            if (i === 2) throw error;
        }
    }
}

module.exports.generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
