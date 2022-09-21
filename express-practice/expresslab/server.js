const express = require('express');
const app = express();
const port = 3000;

app.get("/tip/:amount/:percentage", (req, res) => {
   const {amount, percentage} = req.params;
   const tip = amount * (percentage/100);
   res.send (`Your tip should be: $${tip}`);

});

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:phrase', (req, res) => {
    const randomQuote = [Math.floor(Math.random() * magicBall.length)];
    res.send(`<h2>${req.params.phrase}</h2> + `<h1> ${magicBall[randomQuote]} </h1> + `<h1>$magi</h1>
    </h1>`);

});


//Will%20I%20be%20a%20millionaire

app.get('/greeting/hello/:name', (req, res) => {
    res.send("Hello"+ req.params.name);
}); 


app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));


//  app.listen(port, function () {
//   console.log('Listening on port',port);
// });
