const express = require('express')
const weather = require('weather-js')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req, res) => {

    const data = null
    const zipCity = req.query.zipCity
    if (zipCity) {
        weather.find({search: zipCity, degreeType: 'F'}, (err, [data]) => {
            console.log('-----');
            console.log('data from random input===>', data);
            res.render('index', {data})
        })
    } else {
        res.render('index', {data})
    }



})


app.listen(process.env.PORT || 4000)