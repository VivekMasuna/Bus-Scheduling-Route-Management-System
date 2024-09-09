const express = require('express');
const router = express.Router();
const Admin = require("../models/admin.js");
const AdminRequest = require('../models/adminRequest.js');
const passport = require('passport');
const route = require('../models/route.js');
const { isSuperAdmin } = require('../middleware.js');
const { transporter } = require('../functions.js');
const wrapAsync = require('../utils/wrapAsync.js');

router.get('/register', wrapAsync(async (req, res) => {
    const adminCount = await Admin.countDocuments({});
    if (adminCount > 0) {
        req.flash('error', 'Initial admin has already been registered.');
        return res.redirect('/');
    }
    res.render('admin/register.ejs');
}));

router.post('/register', wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const adminCount = await Admin.countDocuments({});
        if (adminCount > 0) {
            req.flash('error', 'Initial admin has already been registered.');
            return res.redirect('/');
        }

        const newAdmin = new Admin({ username, email, isSuperAdmin: true });
        const registeredAdmin = await Admin.register(newAdmin, password);

        req.logIn(registeredAdmin, (err) => {
            if (err) return next(err);
            req.flash('success', 'Admin registered successfully!');
            res.redirect('/');
        });
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/admin/register');
    }
}));

router.get('/login', (req, res) => {
    res.render('admin/login.ejs');
});

router.post('/login', wrapAsync(async (req, res, next) => {
    passport.authenticate("admin-local", async (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('error', 'Invalid username or password.');
            return res.redirect('/admin/login');
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.admin = user;
            req.flash("success", "Welcome to DTC!");
            let redirectUrl = res.locals.redirectUrl || "/";
            res.redirect(redirectUrl);
        });
    })(req, res, next);
}));

router.get('/dashboard', isSuperAdmin, wrapAsync(async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isSuperAdmin) {
        req.flash('error', 'You must be logged in as an admin to access this page.');
        return res.redirect('/admin/login');
    }

    const pendingRequests = await AdminRequest.find({ isApproved: false });
    res.render('admin/dashboard.ejs', { pendingRequests });
}));

router.get('/request', (req, res) => {
    res.render('admin/request.ejs');
});

router.post('/request', wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newAdminRequest = new AdminRequest({ username, email, password });

        const superAdmin = await Admin.findOne({ isSuperAdmin: true });
        if (superAdmin) {
            const mailOptions = {
                to: superAdmin.email,
                from: process.env.EMAIL_USER,
                subject: 'New Admin Request',
                text: `A new admin request has been submitted by ${username} (${email}). Please log in to approve or reject the request.`
            };
            await transporter.sendMail(mailOptions);

            superAdmin.notifications.push(`New admin request from ${username} (${email}).`);
            await superAdmin.save();

            await newAdminRequest.save();
        }

        req.flash('success', 'Admin request submitted. Awaiting approval.');
        res.redirect('/');
    } catch (error) {
        req.flash('error', error.message);
        console.log(error);
        res.redirect('/admin/request');
    }
}));

router.post('/notifications/:index/clear', isSuperAdmin, wrapAsync(async (req, res) => {
    try {
        const index = req.params.index;
        req.user.notifications.splice(index, 1);
        await req.user.save();
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.log(error);
    }
}));

router.post('/approve/:id', isSuperAdmin, wrapAsync(async (req, res) => {
    try {
        const adminRequest = await AdminRequest.findById(req.params.id);
        if (!adminRequest) {
            req.flash('error', 'Admin request not found.');
            return res.redirect('/admin/dashboard');
        }

        const { username, email, password } = adminRequest;

        try {
            const mailOptions = {
                to: email,
                from: process.env.EMAIL_USER,
                subject: 'Admin Request Approved',
                text: `Congratulations, ${username}! Your request for admin access has been approved. You can now log in as an admin.`
            };
            await transporter.sendMail(mailOptions);

            const newAdmin = new Admin({ username, email });
            await Admin.register(newAdmin, password);

            adminRequest.isApproved = true;
            await adminRequest.save();

            req.flash('success', `Admin request approved and notification sent to ${email}`);
            res.redirect('/admin/dashboard');
        } catch (err) {
            const mailOptions = {
                to: email,
                from: process.env.EMAIL_USER,
                subject: 'Admin Request Approval Failed',
                text: `Dear ${username}, your request for admin access could not be processed. Error: ${err.message}.`
            };
            await transporter.sendMail(mailOptions);

            req.flash('error', `Failed to approve admin request: ${err.message}`);
            res.redirect('/admin/dashboard');
        }
    } catch (err) {
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/admin/dashboard');
    }
}));

router.post('/reject/:id', isSuperAdmin, wrapAsync(async (req, res) => {
    try {
        const adminRequest = await AdminRequest.findById(req.params.id);
        if (!adminRequest) {
            req.flash('error', 'Admin request not found.');
            return res.redirect('/admin/dashboard');
        }

        const mailOptions = {
            to: adminRequest.email,
            from: process.env.EMAIL_USER,
            subject: 'Admin Request Rejected',
            text: `Dear ${adminRequest.username}, your request for admin access has been rejected.`
        };
        await transporter.sendMail(mailOptions);

        await AdminRequest.deleteOne({ _id: req.params.id });

        req.flash('success', `Admin request from ${adminRequest.username} has been rejected.`);
        res.redirect('/admin/dashboard');
    } catch (err) {
        console.log(err);
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/admin/dashboard');
    }
}));

router.get('/map/:route_name', wrapAsync(async (req, res) =>{

    const route_data = await route.find({route_no:req.params.route_name});
    if(route_data.length>0){
        const coord = route_data[0].route_stops;
        res.render('admin/mapLet.ejs', { coord });
    }
    else{
        req.flash('error', 'Something went wrong. Please try again.');

    }
    
}));


module.exports = router;
