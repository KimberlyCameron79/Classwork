// //load express
// const express = require('express')

// // console.log(typeof express)

// //create express app
// const app = express()


// //defined our root route (home and pass two arguments = request and response) first is the path and second is req and res.
// app.get('/', (req, res) => {
//         res.send('<h1> Home Page! </h1>')
// })

// // tell our ap to listen on port 3000
// //for HTTP requests for clients.
// app.listen(3000, () => {
//     console.log('Listening on port 3000')
// })

// app.get('/home', (req, res) => {
//     res.send('<h1> Home Page !</h1>')
// })


// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res) {
  	res.send('<h1>Hello World!</h1>');
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine














