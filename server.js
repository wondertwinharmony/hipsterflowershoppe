//import modules needed for creating a basic server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
// const hidden = require("./private/private.js");
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});
//configure the server to use bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//set the port
var port = process.env.PORT || 7000;
/**
 * Back end routing set up here
 */
app.post("/contact", function (req, res) {
  console.log("req.body for /contact route: ", req.body, mailgun);
  var mailData = {
    from: req.body.first + " " + req.body.last + " " + req.body.email,
    to: "cheri.creativecelebrations@gmail.com",
    subject: req.body.first + " " + req.body.last + " - " + req.body.subject,
    text: req.body.message + "\n" + req.body.first + " " + req.body.last,
  };
  mailgun.messages().send(mailData, function (error, body) {
    if (error) {
      console.log(error);
      return res.send(
        "Looks like a problem on our end, please check back later."
      );
    } else {
      console.log("Body from mailgun send function: ", body);
      res.status(200).json({ message: "Your message was sent successfully." });
    }
  });
  // let email = req.body.email;
  // console.log("THIS IS THE EMAIL THAT IS BEING VALIDATED: ", email);
  // mg.validate
  //   .get(email)
  //   .then((data) => console.log("response.body from the MG API: ", data))
  //   .catch((err) => console.log("error from MG API: ", err));
  // validator(req.body.email, function(err, result) {
  //   if (err) {
  //     // email was not valid
  //     console.log("Invalid email");
  //     res.send(
  //       "The email you provided was invalid. Please make sure the email address you provided was correct:\n\n" +
  //         req.body.email +
  //         "\n\n For your convenience, your message is provided below to cut and paste back into the contact form.\n\n" +
  //         req.body.message
  //     );
  //   } else {
  //     console.log(result);
  //     console.log("Valid status: ", result.is_valid);
  //     // register the person for your service etc.
  //     if (result.is_valid) {
  //       var mailOptions = {
  //         from:
  //           '"' +
  //           req.body.first +
  //           " " +
  //           req.body.last +
  //           '"' +
  //           " " +
  //           req.body.email,
  //         to: "cheri.creativecelebrations@gmail.com",
  //         subject:
  //           req.body.first + " " + req.body.last + " - " + req.body.subject,
  //         text: req.body.message + "\n" + req.body.first + " " + req.body.last
  //       };
  //       console.log("mailOptions: ", mailOptions);
  //       mailgun.messages().send(mailOptions, function(err, body) {
  //         if (err) {
  //           console.log(err);
  //           return res.send(
  //             "Looks like a problem on our end, please check back later."
  //           );
  //         } else {
  //           console.log("Body from mailgun send function: ", body);
  //           res
  //             .status(200)
  //             .json({ message: "Your message was sent successfully." });
  //         }
  //       });
  //     } else {
  //       res.send(
  //         "The email you provided was invalid. Please make sure the email address you provided was correct:\n\n" +
  //           req.body.email +
  //           "\n\n For your convenience, your message is provided below to cut and paste back into the contact form:\n\n" +
  //           req.body.message
  //       );
  //     }
  //   }
  // });
});
//serve static assets
app.use(express.static(__dirname + "/client"));
// Handles all routes to avoid getting not found error
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "client", "index.html"));
});
//start server
app.listen(port);
console.log("Website is live at port: ", port);
