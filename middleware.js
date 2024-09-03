module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isSuperAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.isSuperAdmin) {
        return next();
    }
    req.flash('error', 'You must be logged in as a super admin to access this page.');
    res.redirect('/admin/login');
}
