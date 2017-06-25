//import modules needed for creating a basic server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// var hidden = require('./private/private.js');
var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN});
var validator = require('mailgun-validate-email')(process.env.MAILGUN_PUBKEY);

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

  validator(req.body.email, function (err, result){
    if(err) {
      // email was not valid
      console.log("Invalid email");
      res.send("The email you provided was invalid. Please make sure the email address you provided was correct:\n\n" + req.body.email + "\n\n For your convenience, your message is provided below to cut and paste back into the contact form.\n\n" + req.body.message);
    } else {
      console.log(result);
      console.log("Valid status: ", result.is_valid);
      // register the person for your service etc.
      if(result.is_valid){
        var mailOptions = {
          from: '"' + req.body.first + " " + req.body.last + '"' + ' ' + req.body.email,
          to: "gabrielschrock@gmail.com",
          subject: req.body.first + " " + req.body.last + " - " + req.body.subject,
          text: req.body.message + "\n" + req.body.first + " " + req.body.last
        };

        console.log("mailOptions: ", mailOptions);

        mailgun.messages().send(mailOptions, function(err, body){
          if(err){
            console.log(err);
            return res.send("Looks like a problem on our end, please check back later.");
          } else {
            console.log("Body from mailgun send function: ", body);
            res.status(200).json({message: "Your message was sent successfully."});
          }
        });
      } else {
        res.send("The email you provided was invalid. Please make sure the email address you provided was correct:\n\n" + req.body.email  + "\n\n For your convenience, your message is provided below to cut and paste back into the contact form:\n\n" + req.body.message);
      }
    }
  });

});

//serve static assets
app.use(express.static(__dirname + '/client'));

// Handles all routes to avoid getting not found error
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
});

//start server
app.listen(port);
console.log('Website is live at port: ', port);
