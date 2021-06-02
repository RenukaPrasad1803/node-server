const express = require('express')
const path = require('path')


const app = express()

// app.set('view engine', 'hbs')

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//   res.send('<h1>Weather<h1>')
// })

app.get('', (req, res) => {
  res.render('index', {
     title: 'Weather App',
     name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.send({
    name: 'Andrew',
    age: 27
  })
})

app.get('/weather', (req, res) => {
  console.log('Inside weather route')
  // if (req.query.address) {
  //   res.send({
  //     forecast: 'It is Snowing',
  //     location: 'Phil',
  //     address: req.query.address
  //   })
  // }
  res.send({
    forecast: 'It is Snowing',
    location: 'Phil'
  })
})

app.listen(4000, () => {
  console.log('App Listenine at 4000')
})