//import modules needed for creating a basic server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configure the server to use bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set the port
var port = process.env.PORT || 7000;

/**
 * Back end routing set up here
 */

//get an instance of the express router here
var router = express.Router();

//list of routes below
router.route('/contact')
.post(function(req, res){
  console.log('Someone has an inquiry about your business: ', req.body);
});

//serve static assets
app.use(express.static(__dirname + '/client'));

//start server
app.listen(port);
console.log('Website is live at port: ', port);


