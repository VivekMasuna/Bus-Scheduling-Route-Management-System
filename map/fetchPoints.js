const APIKey = require('./secret_api.js');

async function locationFinder(place){

    place = place+",Delhi,India";
        
    place = place.replace(/\(([^)]+)\)/,'')


    let fetch_ = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${place}&apiKey=${APIKey}`);
    let res = await fetch_.json();
    let temp = {lat:null,lon:null}
    try{
        temp.lat=res.features[0].properties.lat;
        temp.lon = res.features[0].properties.lon;
    }
    catch(error){
        console.log(place,error)
    }

    return temp;
}

module.exports = locationFinder;

