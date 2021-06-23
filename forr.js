const request = require('request')

const forr = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dffcd6d69e9f80adab54427e81dcda78&query='+ latitude + ',' + longitude +'&units=f';

    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
       
        } 
        else {
            callback(undefined,   res.body.current.observation_time+' It is currently ' + res.body.current.temperature+ ' Fahrenheit out. There is a ' + res.body.current.precip+ '% chance of rain.')
        }
    })
}

module.exports = forr;