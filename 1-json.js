
const { Console } = require('console');
const { ECANCELED } = require('constants');
const fs=require('fs')

/*
const book=
{
author:" apj abdul kalam",
title:"wings of fire"
}
const bookJSON=JSON.stringify(book);
/*

//console.log(bookJSON);
 var parsedata=JSON.parse(bookJSON);
 console.log(parsedata);
 fs.writeFileSync('1-json.json',bookJSON);
 
 const databuffer=fs.readFileSync('1-json.json');
 //console.log(databuffer);
 const dataJSON=databuffer.toString();
 console.log(dataJSON);
 const data=JSON.parse(dataJSON);
console.log(data);
data.name="rahul";
data.age=34;
const bookJSON=JSON.stringify(data);
fs.writeFileSync('1-json.json',bookJSON);
// console.log(data.name);
console.log("start");
setTimeout( ()=>
{
console.log("hello");
},2000)


setTimeout( ()=>
{
console.log("hell 1111111111111o");
},0)
console.log("end");*/
/*

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=dffcd6d69e9f80adab54427e81dcda78&query=25.37586,85.97265&units=f';

request({ url: url,json:true }, (error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(data.current.temperature);

if(error)
console.log("api is not responding");
else if(response.body.error)
{
 console.log("unalbe to fetch data")  ;
}
else
    console.log(response);

})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/sherpur bihar.json?access_token=pk.eyJ1IjoicmFqLW5pdGoxMjM0IiwiYSI6ImNrcHZzNWVtNDBjZ2gyd3AycDI5b3J2dm8ifQ.m2yK5obJuRK27ZXtNdTRVA&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {

    if(error)
    {
        console.log("api is not responding");  
    }
    else if(response.body.error)
{
 console.log("unalbe to fetch data")  ;
}
    else{
        console.log( response.body);
        const latitude = response.body.features[0].center[0];
        const longitude = response.body.features[0].center[1];
        console.log(latitude, longitude);
    }
  
})


// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})






geocode('maranchi',(error,data)=>
{
console.log("errror:", error);
console.log("data:", data);


})


*/const request = require('request');


//module.exports = forecast;

//module.exports = geocode;


const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmFqLW5pdGoxMjM0IiwiYSI6ImNrcHZzNWVtNDBjZ2gyd3AycDI5b3J2dm8ifQ.m2yK5obJuRK27ZXtNdTRVA&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}





const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dffcd6d69e9f80adab54427e81dcda78&query='+latitude+','+longitude+'&units=f';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}



