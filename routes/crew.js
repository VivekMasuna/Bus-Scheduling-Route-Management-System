const express = require('express');
const router = express.Router();
// const { generateVerificationCode, sendVerificationEmail } = require('../functions.js');
const Crew = require("../models/crew.js");
const Schedule = require("../models/schedule.js");
const { saveRedirectUrl } = require('../middleware.js');
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync.js');
const moment = require('moment');

router.get('/signup', (req, res) => {
    res.render("crew/signup.ejs");
});

router.post('/signup', wrapAsync(async (req, res, next) => {
    try {
        const { firstName, lastName, mobile, email, address, role, depotLocation, username, password } = req.body;
        
        const newCrew = new Crew({
            name: firstName + lastName,
            mobile,
            email,
            address,
            role,
            depot_location: depotLocation,
            username
        });

        const registeredCrew = await Crew.register(newCrew, password);
        
        req.login(registeredCrew, (err) => {
            if (err) return next(err);

            req.flash("success", "Welcome to DTC!");
            res.redirect("/");
        });
    } catch (e) {
        console.log(e);
        req.flash("error", e.message);
        res.redirect("/crew/signup");
    }
}));

router.get('/login', (req, res) => {
    res.render("crew/login.ejs");
});

router.post('/login', saveRedirectUrl, wrapAsync(async (req, res, next) => {
    passport.authenticate("local", async (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('error', 'Invalid username or password.');
            return res.redirect('/crew/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.crew = user;
            req.flash("success", "Welcome to DTC");
            let redirectUrl = res.locals.redirectUrl || "/";
            res.redirect(redirectUrl);
        });
    })(req, res, next);
}));

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/");
    });
});

router.get('/dashboard', async (req, res) => {
    try {
        const crew = await Crew.findById(req.user._id);
        res.render('crew/dashboard', { crew });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect('/');
    }
});

router.get('/schedules', async (req, res) => {
    try {
        const crewId = req.crew._id; 

        const schedules = await Schedule.find({
            $or: [
                { driver: crewId },
                { conductor: crewId }
            ]
        }).populate('bus driver conductor route');

        res.render('crew/schedules.ejs', { schedules, moment });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect('/');
    }
});

module.exports = router;
