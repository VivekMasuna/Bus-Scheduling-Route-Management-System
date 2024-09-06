const mongoose = require('mongoose');
const Route = require('../models/route');
const routesData = require('./routesData');
const Bus = require('../models/bus');
const buses = require('./busData');
const Crew = require('../models/crew');
const crews = require('./crewData');
const MONGO_URL = "mongodb://localhost:27017/bus-management-system";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

async function insertRoutes() {
    try {
        await Route.deleteMany({});
        await Route.insertMany(routesData);
        console.log('All routes added successfully!');
    } catch (error) {
        console.error('Error adding routes:', error);
    } finally {
        mongoose.connection.close();
    }
};

async function insertBuses() {
    try {
        await Bus.deleteMany({});
        await Bus.insertMany(buses);
        console.log('50 buses inserted successfully!');
    } catch (error) {
        console.error('Error inserting buses:', error);
    } finally {
        mongoose.connection.close();
    }
}

async function insertCrews() {
    try {
        await Crew.deleteMany({});
        await Crew.insertMany(crews);
        console.log('100 crew members inserted successfully!');
    } catch (error) {
        console.error('Error inserting crew members:', error);
    } finally {
        mongoose.connection.close();
    }
}

insertRoutes();
//insertBuses();
//insertCrews();
