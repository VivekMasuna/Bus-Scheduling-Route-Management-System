const APIKey = require('./secret_api.js');
const mongoose = require('mongoose');
const MONGO_URL = "mongodb://localhost:27017/bus-management-system";

const Schema = mongoose.Schema;
const RouteSchema = new Schema({
    route_no: { type: String, unique: true, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    route_stops: [String],
    distance: { type: Number, required: true },
    schedule: [{
        start_time: { type: String, required: true },
        end_time: { type: String, required: true }
    }],
    is_active: { type: Boolean, default: true },
}, { timestamps: true });

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

const routes = mongoose.model('route',RouteSchema,'routes');

async function locationFinder(route_name){
    var data = await routes.find({route_no:route_name});

    var geo = new Array();

    for(let i=0;i<data[0].route_stops.length;i++){
        let place = data[0].route_stops[i]+",Delhi,India";
        
        place = place.replace(/\(([^)]+)\)/,'')


        let fetch_ = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${place}&apiKey=${APIKey}`);
        let res = await fetch_.json();

        place = (res.features[0].properties.lat,res.features[0].properties.lon);
        geo.push(place);
    }

    return geo;
}

