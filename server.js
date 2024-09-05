require('dotenv').config()

const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Route = require("./models/route");
const Admin = require("./models/admin.js");
const Crew = require("./models/crew.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require('passport');
const LocalStrategy = require('passport-local');

const adminRouter = require('./routes/admin.js');
const crewRouter = require('./routes/crew.js');
const forgotRouter = require('./routes/forgot.js');

const MONGO_URL = 'mongodb://127.0.0.1:27017/DTC';

main()
    .then((res) => {
        console.log("Connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/assets")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);

const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto: {
        secret: "my_secret_code",
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: "my_secret_code",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Crew.authenticate()));
passport.use('admin-local', new LocalStrategy(Admin.authenticate()));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        let user = await Crew.findById(id);
        if (!user) {
            user = await Admin.findById(id);
        }
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use((req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user instanceof Admin) {
            req.admin = req.user;
        } else if (req.user instanceof Crew) {
            req.crew = req.user;
        }
    }
    next();
});

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currCrew = req.crew; //
    res.locals.currAdmin = req.admin;
    next();
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.use('/admin', adminRouter);
app.use('/crew', crewRouter);
app.use('/', forgotRouter);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
