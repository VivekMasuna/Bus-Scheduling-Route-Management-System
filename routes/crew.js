const express = require('express');
const router = express.Router();
// const { generateVerificationCode, sendVerificationEmail } = require('../functions.js');
const Crew = require("../models/crew.js");
const { saveRedirectUrl } = require('../middleware.js');
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync.js');

router.get('/signup', (req, res) => {
    res.render("crew/signup.ejs");
});

router.post('/signup', wrapAsync(async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        let newCrew = new Crew({email, username});
        let registeredCrew = await User.register(newCrew, password);
        console.log(registeredCrew);
        req.login(registeredCrew, (err) => {
            if(err) {
                next(err);
            }
            req.flash("success", "Welcome to DTC!");
            res.redirect("/");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
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
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.crew = user;
            req.flash("success", "Welcome to Yoga.Fitnesse!");
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

module.exports = router;
