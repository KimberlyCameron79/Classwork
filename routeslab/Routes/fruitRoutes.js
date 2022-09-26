//load express
const express = require('express')

//load our fruits data
// const fruits = require('../routes')


// Creates our express router (object)
const router = express()

// Identify our port
const port =5000

//Middleware
router.use('/',fruitRoutes)

// Setup "root" routes
router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Setup "index" route
router.get('/', (req, res) => {
    res.send(fruits)
    res.render('Index', {fruits: fruits})
})

// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('New')
})

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    res.send(fruits[req.params.index])
    res.render('Show', {fruit: fruits[req.params.index]}
});

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})


// Listen to port
router.listen(port, () => {
    console.log('Listening on port: ', port)
})





//create a special router object for our routes
const router = express.Router()

