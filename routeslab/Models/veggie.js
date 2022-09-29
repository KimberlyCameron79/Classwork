// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const veggieSchema = new Schema({
    name: { type: String, required: true }, 
    color: { type: String, required: true }, 
    readyToEat: Boolean
})

// create a Model from our Schema
const Veggie = mongoose.model('Veggie', veggieSchema)

// export our Model
module.exports = Veggie;