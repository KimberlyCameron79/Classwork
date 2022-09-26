//load express
const express = require('express')

//load our veggies data
const veggies = require('../models/vegetables')


// Creates our express router (object)
const router = express.Router()





// // Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// Setup "index" route
router.get('/', (req, res) => {
    // res.send(veggies)
    res.render('Index', {veggies: veggies})
})

// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create Veggies</form>')
    res.render('New')
})

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    veggies.push(req.body)
    res.redirect('/veggies')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    // res.send(veggies[req.params.index])
    res.render('Show', {veggie: veggies[req.params.index]})
});

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit Veggies</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a Veggies at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a Veggies at index! (in DB)')
})


// Listen to port
// router.listen(port, () => {
//     console.log('Listening on port: ', port)
// })





//create a special router object for our routes
// const router = express.Router()
module.exports = router;
