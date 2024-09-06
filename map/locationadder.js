const locationFinder = require('../map/fetchPoints');
const routes_ = require('../models/route');
const mongoose = require('mongoose');
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

async function update_(){
    record = await routes_.find();
    let j=0;
    for(re of record){
        for(let i=0;i<re.route_stops.length;i++){
            coord = await locationFinder(re.route_stops[i].place);
            re.route_stops[i].lat = coord.lat;
            re.route_stops[i].lon = coord.lon;

            
        }
        await re.save();
        console.log(j);j++;
    }
}

update_();


