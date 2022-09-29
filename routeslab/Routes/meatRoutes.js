// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of meat
const meat = require('../models/meat')
const meats = require('../models/meats')

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', (req, res) => {  
    
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', { meats: foundMeat })
        }
    })

    //res.render('meats/Index', { meats: meats })
})

// Setup "new" route
router.get('/new', (req, res) => {     
    // res.send('<form>Create Meat</form>')
    res.render('meats/New')
})

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })

    // meats.push(req.body)
    // res.redirect('/meats')
})

// Setup "show" route  
router.get('/:id', (req, res) => {
    // res.send(meats[req.params.index])

    //findbyId accepts 2 arguments
    //1st the id of the document in our database
    //2nd callback (with err object and found document)

    meat.findById(req.params.id,(err, foundMeat)=> {
        if (err) {
            res.status(400).json(err)
        }else{
            res.status(200).render('meats/Show', {meat: foundMeat})
        }
    } )



    res.render('meats/Show', { meat: meats[req.params.index] })
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit Meat</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a meat at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a meat at index! (in DB)')
})

module.exports = router


