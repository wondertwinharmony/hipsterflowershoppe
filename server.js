//import modules needed for creating a basic server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hidden = require('./private/private.js');
var mailgun = require('mailgun-js')({apiKey: hidden.MAILGUN_KEY , domain: hidden.MAILGUN_DOMAIN});

//configure the server to use bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set the port
var port = process.env.PORT || 7000;

/**
 * Back end routing set up here
 */

app.post('/contact', function(req, res){
  console.log("req.body for /contact route: ", req.body, mailgun);
  var mailOptions = {
    from: "'" + req.body.first + " " + req.body.last + "' " + req.body.email,
    to: "gabrielschrock@gmail.com",
    subject: req.body.first + " " + req.body.last + " - " + req.body.subject,
    text: req.body.message + "\n" + req.body.first + " " + req.body.last
  };

  console.log("mailOptions: ", mailOptions);

  mailgun.messages().send(mailOptions, function(err, body){
    if(err){
      console.log(err);
      return res.send("Error sending message");
    } else {
      console.log("Body from mailgun send function: ", body);
      res.status(200).json({message: "Message successfully sent, thank you for your inquiry."});
    }
  });
});

//serve static assets
app.use(express.static(__dirname + '/client'));

//start server
app.listen(port);
console.log('Website is live at port: ', port);


