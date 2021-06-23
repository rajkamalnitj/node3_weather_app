const path = require('path');
const express = require('express');
const hbs = require('hbs');
//const geocode = require('./geo');
//const forecast = require('./forr');
const search= require('./testing1')
const psearch =require('./testing')
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname)
const viewsPath = path.join(__dirname)
const partialsPath = path.join(__dirname)

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index1', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})
app.get('/home', (req, res) => {
    res.render('index1', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

app.get('/player', (req, res) => {
    if (!req.query.name) {
        return res.send({
            error: 'You must provide an name!'
        })
    }
console.log(req.query.name);

search(req.query.name, (error, res1) => {
    if (error) {
        return console.log(error)
    }
console.log("pid value "+res);
    psearch(res1, (error, playerinfo) => {
        if (error) {
            return console.log(error)
        }
          else

{ console.log(playerinfo);

console.log(playerinfo.data);
res.send({
     playerinfo
  
})
        console.log('pid value'+playerinfo.pid);
        
        console.log(' country  '+playerinfo.country);

}
    })
})


})



/*


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

*/
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})


/*



const search= require('./testing1')
const psearch =require('./testing')

const name = process.argv[2]

if (!name) {
    console.log('Please provide a name')
} else {
    search(name, (error, res) => {
        if (error) {
            return console.log(error)
        }
console.log("pid value "+res);
        psearch(res, (error, playerinfo) => {
            if (error) {
                return console.log(error)
            }

            else
{ console.log(playerinfo);

    console.log(playerinfo.data);

            console.log('pid value'+playerinfo.pid);
            
            console.log(' country  '+playerinfo.country);
           
      
            

}
        })
    })
}

*/




