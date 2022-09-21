const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', 'Witches Butter']
const port = 3000;



//load express
const express = require('express')

//create the app
const app = express()

app.get('/plants', (req, res) => {
    res.send(`
    <h1> Plants are awesome!</h1>
});

//define routes (when ready)
app.get('/:index', (req, res) => {
if (plants[req.params.index]){
    res.send(plants[req.params.index])
} else {
    res.send('cannot find anything at index')
}

}
)
//example with multiple params
app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname)

//example with req.query
app.get('/howdy/:firstname', (req, res) => {
    console.log(req.params, ':parameters')
    console.log(req.query, ':queries')
    res.send('testing')
})
})
//listen to port 3000
app.listen(port, () => {
    console.log('Listening on port', port)
});