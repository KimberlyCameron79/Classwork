// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our veggies data
const veggies = require('./vegetables')

// Setup "index" route
router.get('/', (req, res) => {  
    res.send(veggies)
})

// Setup "new" route
router.get('/new', (req, res) => {     
    res.send('<form>Create veggies</form>')
})

// Setup "create" route
router.post('/', (req, res) => {
    res.send('Creating a new veggies! (in DB)')
})

// Setup "show" route  
router.get('/routes/veggieRoutes/:index', (req, res) => {
    res.send(veggies[req.params.index])
})

// Setup "edit" route
router.get('/routes/veggieRoutes/:index/edit', (req, res) => {
    res.send('<form>Edit veggies</form>')
})

// Setup "update" route
router.put('/routes/veggieRoutes/:index', (req, res) => {
    res.send('Updating a veggies at index! (in DB)')
})

// Setup "destroy" route
router.delete('/routes/veggieRoutes/:index', (req, res) => {
    res.send('Deleting a veggies at index! (in DB)')
})

module.exports = router
