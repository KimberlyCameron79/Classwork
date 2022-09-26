const express = require('express')
const { appendFile } = require('fs')
const Router = express.Router()

const veggies = require('./Models/vegetables')

router.get('/', (req, res) => {  
    res.send(veggies)
})

router.get('/models/new', (req, res) => {     
    res.send('<form>Create veggies</form>')
})

router.post('/models', (req, res) => {
    res.send('Creating a new veggies! (in DB)')
})

router.get('/models/vegetables/:index', (req, res) => {
    res.send(veggies[req.params.index])
})

router.get('/models/vegetables/:index/edit', (req, res) => {
    res.send('<form>Edit veggies</form>')
})

router.put('/models/vegetables/:index', (req, res) => {
    res.send('Updating a veggies at index! (in DB)')
})
// Setup "destroy" route
router.delete('/models/vegetables/:index', (req, res) => {
    res.send('Deleting a veggie at index! (in DB)')
})
