const express = require('express')
const { appendFile } = require('fs')
const Router = express.Router()

const meat = require('./Models/meat')

router.get('/models', (req, res) => {  
    res.send(meat)
})

router.get('/models/new', (req, res) => {     
    res.send('<form>Create meat</form>')
})

router.post('/models/meat', (req, res) => {
    res.send('Creating a new meat! (in DB)')
})

router.get('/models/meat/:index', (req, res) => {
    res.send(meat[req.params.index])
})

router.get('/models/meat/:index/edit', (req, res) => {
    res.send('<form>Edit meat</form>')
})

router.put('/models/meat/:index', (req, res) => {
    res.send('Updating a meat at index! (in DB)')
})
// Setup "destroy" route
router.delete('/models/meat/:index', (req, res) => {
    res.send('Deleting a veggie at index! (in DB)')
})
