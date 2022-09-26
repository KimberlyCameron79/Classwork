// //loading express
const express = require('express')

// // creates our express app (object)
const app = express()
const fruitRoutes = require('./routes/fruitRoutes')
// //Identify our port
const port = 5000
//setup ouir view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Middleware
app.use(express.urlencoded({extended:false}))

app.use('/', fruitRoutes)

// ?name=kiwi&color=green&readToEat=vlaue
//Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})



// // Load express
// const express = require('express')

// // Bring in our packaged routes
// const fruitRoutes = require('./models/fruitRoutes')
// const veggieRoutes = require('./models/veggieRoutes')
// const meatRoutes = require('./models/meatRoutes')
// const { Router } = require('express')

// // Creates our express app (object)
// // const Router = express()

// // Identify our port
// const port = 5000

// // Middleware
// app.use('/api/fruits', fruitRoutes)

// // Listen to port
// app.listen(port, () => {
//     console.log('Listening on port: ', port)
// })



// Router.get('/:index', (req, res) => {
//     res.send(fruits[req.params.index])
// })

// Router.get('/models/vegetables/:index', (req, res) => {
//     res.send(veggies[req.params.index])
// })

// Router.get('/models/meat/:index', (req, res) => {
//     res.send(meat[req.params.index])
// })
