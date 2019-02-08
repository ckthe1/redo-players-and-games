let express = require('express');
let bodyParser = require('body-parser')// goes with req.body ..DO NOT FORGET
let PORT = 5000;// all caps
let app = express();//only in javascript, this express can be  both object and function
// create an application


let players = require ('./modules/players')//

app.use(express.static('server/public'));// get any reuqst, static
app.use(bodyParser.urlencoded({ extended: true }));// middleware, install npm body-parser


app.get('/players', (req, res) => {// in floder players
    res.send(players);// 
});

app.post('/players', (req, res) => {//post same as in client side
   // req.body;// data, in client side is body here
    players.push(req.body);// push array in req.body object
    res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});