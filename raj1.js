const geo = require('./geo')
const forr =require('./forr')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} 


else {
    geo(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }
console.log(latitude);
console.log(longitude);
        forr(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
