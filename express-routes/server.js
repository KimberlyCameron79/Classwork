// //loading express
const express = require('express')

// // creates our express app (object)
const app = express()
const fruitRoutes = require('./routes/fruits')
// //Identify our port
const port = 3000
//setup ouir view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Middleware
app.use('/fruits', fruitRoutes)

//Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})
