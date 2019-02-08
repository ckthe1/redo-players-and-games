let express = require('express');
//let bodyParser = require('body-parser')
let PORT = 5000;// all caps
let app = express();//only in javascript, this express can be  both object and function
// create an application


let players = require ('./modules/players')//

app.use(express.static('server/public'));// get any reuqst, static
//app.use(bodyParser.urlencoded({ extended: true }));// middleware, install npm body-parser


app.get('/players', (req, res) => {// in floder players
    res.send(players);// 
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});