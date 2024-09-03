const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const Crew = require("../models/crew.js");
const wrapAsync = require('../utils/wrapAsync.js');

router.get('/forgot', (req, res) => {
    res.render('crew/forgot.ejs');
});

router.post('/forgot', wrapAsync(async (req, res) => {
    try {
        const token = crypto.randomBytes(20).toString('hex');
        const user = await Crew.findOne({ email: req.body.email });
        if (!user) {
            req.flash('error', 'No account with that email address exists.');
            return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000;
        await user.save();

        const smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            to: user.email,
            from: process.env.EMAIL_USER,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.
            Please click on the following link, or paste this into your browser to complete the process: http://${req.headers.host}/reset/${token}
            If you did not request this, please ignore this email and your password will remain unchanged.`,
        };

        await smtpTransport.sendMail(mailOptions);
        req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        res.redirect('/forgot');
    } catch (err) {
        req.flash('error', 'Something went wrong. Please try again.');
        console.log(err);
        res.redirect('/forgot');
    }
}));

router.get('/reset/:token', wrapAsync(async (req, res) => {
    try {
        const user = await Crew.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
        });
        if (!user) {
            req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('/forgot');
        }
        res.render('crew/reset.ejs', { token: req.params.token });
    } catch (err) {
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/forgot');
    }
}));

router.post('/reset/:token', wrapAsync(async (req, res) => {
    try {
        const user = await Crew.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
        });
        if (!user) {
            req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('/forgot');
        }

        if (req.body.password === req.body.confirm) {
            user.setPassword(req.body.password, async (err) => {
                if (err) {
                    req.flash('error', 'Something went wrong. Please try again.');
                    return res.redirect('/forgot');
                }
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;

                await user.save();
                req.logIn(user, (err) => {
                    if (err) {
                        req.flash('error', 'Something went wrong. Please try again.');
                        return res.redirect('/forgot');
                    }
                    req.flash('success', 'Success! Your password has been changed.');
                    res.redirect('/');
                });
            });
        } else {
            req.flash('error', 'Passwords do not match.');
            res.redirect('back');
        }
    } catch (err) {
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/forgot');
    }
}));

module.exports = router;
