//load express
const express = require('express')

//load our meats data
const meats = require('../models/meat')


// Creates our express router (object)
const router = express.Router()





// // Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// Setup "index" route
router.get('/', (req, res) => {
    // res.send(meats)
    res.render('Index', {meat: meats})
})

// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create Meat</form>')
    res.render('New')
})

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    meats.push(req.body)
    res.redirect('/meat')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    // res.send(meats[req.params.index])
    res.render('Show', {meat: meats[req.params.index]})
});

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit meat</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a meat at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a meat at index! (in DB)')
})


// Listen to port
// router.listen(port, () => {
//     console.log('Listening on port: ', port)
// })





//create a special router object for our routes
// const router = express.Router()
module.exports = router;

