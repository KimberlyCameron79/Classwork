const Veggie = require('../models/veggie')
const seed = require('../models/seed')
// Bring in seed data


// ROUTE     GET /veggies    (index)
const findAllVeggies = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Veggie.find({}, (err, foundVeggie) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('veggies/Index', { veggies: foundVeggie })
        }
    })
}

// ROUTE      GET /veggies/new    (new)
const showNewView = (req, res) => {     
    // res.send('<form>Create Veggie</form>')
    res.render('veggies/New')
}

// ROUTE     POST /veggies     (create)
const createNewVeggie = (req, res) => {
   
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Veggie.create(req.body, (err, createdVeggie) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/veggies')
        }
    })
}


// ROUTE       GET /veggies/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Veggie.deleteMany({}, (err, deletedVeggies) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.veggies)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Veggie.create(seed.veggies, (err, createdVeggie) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/veggies')
                }
            })
        }
    })
}

// ROUTE     GET /veggies/:id     (show)
const showOneVeggie = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Veggie.findById(req.params.id, (err, foundVeggie) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('veggies/Show', { veggie: foundVeggie })
        }
    })
}


// ROUTE      GET /veggies/:id/edit     (edit)
const showEditView = (req, res) => {
    Veggie.findById(req.params.id, (err, foundVeggie) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('veggies/Edit', { veggies: foundVeggie })
        }
    })
}

// ROUTE     PUT /veggies/:id       (update)
const updateOneVeggie = (req, res) => {


    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundVeggies or updatedVeggies)
    Veggie.findByIdAndUpdate(req.params.id, req.body, (err, foundVeggie) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/veggies/${req.params.id}`)
        }
    })
}


// ROUTE       DELETE /veggies/:id      (destroy)
const deleteOneVeggie = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a Veggie at index! (in DB)')
    
    Veggie.findByIdAndDelete(req.params.id, (err, deletedVeggie) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/veggies')
        }
    })
}
const clearData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Veggie.deleteMany({}, (err, deletedVeggies) => {
        if (err) {
            res.status(400).json(err)
        } else {
            // console.log('deleted data.')
            // console.log(seed.veggies)
            // // Data has been successfully deleted
            // // Now use seed data to repopulate the database
            // Veggie.create(seed.veggies, (err, createdVeggie) => {
            //     if (err) {
            //         res.status(400).json(err)
            //     } else {
                    res.status(200).redirect('/veggies')
                }
            })
        }



module.exports = {
    findAllVeggies,
    showNewView, 
    createNewVeggie,
    seedStarterData,
    showOneVeggie,
    showEditView,
    updateOneVeggie,
    deleteOneVeggie,
    clearData
}