/*const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=dffcd6d69e9f80adab54427e81dcda78&query=25.37586,85.97265&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()*/
const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app = express()
const htmppath=path.join(__dirname);

app.set('view engine','hbs');

app.use(express.static(htmppath));
/*
app.get('', (req, res) => {
   res.render('index.hbs',{
title:'weather app',
name:'rajkamal'


   });
 })*/

app.get('', (req, res) => {
   // res.send('Hello express!');
    res.send('<h1>weather</h1>');
})

app.get('/help', (req, res) => {
    res.send({
name:'andrew',
age:27

    })
})

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>')
})

app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})





