//import modules needed for creating a basic server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configure the server to use bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set the port
var port = process.env.PORT || 7000;

app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

/**
 * Back end routing set up here
 */

app.post('/contact', function(req, res){
  console.log("req.body for /contact route: ", req.body);
  res.status(200).json({message: "Message successfully sent, thank you for your inquiry."});
});

//serve static assets
app.use(express.static(__dirname + '/client'));

//start server
app.listen(port);
console.log('Website is live at port: ', port);


