//load express
const express = require('express')

//load our fruits data
const fruits = require('../models/fruits')


// Creates our express app (object)
const app = express()

// Identify our port
const port =3000

//Middleware
app.use('/api/fruits',fruitRoutes)

// Setup "root" routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Setup "index" route
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// Setup "new" route
app.get('/fruits/new', (req, res) => {
    res.send('<form>Create fruit</form>')
})

// Setup "create" route
app.post('/fruits', (req, res) => {
    res.send('Creating a new fruit! (in DB)')
})

// Setup "show" route  
app.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index])
})

// Setup "edit" route
app.get('/fruits/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
app.put('/fruits/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
app.delete('/fruits/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})


// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})





//create a special router object for our routes
const router = express.Router()

