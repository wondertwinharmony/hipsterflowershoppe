import React from 'react';
import { Component } from 'react';
import $ from 'jquery';
import { Row, Input, Button } from 'react-materialize';
import { default as swal } from 'sweetalert2';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
      subject: '',
      message: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
  }

  onInputChange() {
    this.setState(function(){
      return {
        first: $('#first').val(),
        last: $('#last').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
      };
    });
  }

  handleContactFormSubmit(contactInfo) {
    $.ajax({
      url: '/contact',
      dataType: 'json',
      type: 'POST',
      data: contactInfo,
      complete: function(data, status) {
        var message = '';
        if(status === 'success'){
          message = data.responseJSON.message + "\n Thank you for contacting Cheri's Creative Celebrations. \nWe will get back to you soon.";
          swal({
            title: 'Inquiry Submitted!',
            text: message,
            type: 'success',
            allowOutsideClick: true
          });
        } else {
          message = "We're sorry! There was an error sending your message." + ' ' + data.responseText;
          swal({
            title: 'Oh no!',
            text: message,
            type: 'error',
            width: '60%',
            allowOutsideClick: false
          });
        }
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    var first = this.state.first.trim();
    var last = this.state.last.trim();
    var email = this.state.email.trim();
    var subject = this.state.subject.trim();
    var message = this.state.message.trim();

    this.handleContactFormSubmit({
      first: first,
      last: last,
      email: email,
      subject: subject,
      message: message
    });

    this.setState(function(){
      return {
      first: '',
      last: '',
      email: '',
      subject: '',
      message: ''
      };
    });
  }

  render() {
    return (
      <div id="contact-content">
        <h4>Contact Us!</h4>
        <form name="contactForm" onSubmit={this.handleSubmit} id="contact">
          <Row>
            <Input id="first" s={6} label="First Name" type="text" value={this.state.first} onChange={this.onInputChange} validate required/>
            <Input id="last" s={6} label="Last Name" type="text" value={this.state.last} onChange={this.onInputChange} validate required/>
            <Input id="email" s={6} label="Email Address" type="email" value={this.state.email} onChange={this.onInputChange} validate required/>
            <Input id="subject" s={12} label="Subject" type="text" value={this.state.subject} onChange={this.onInputChange} validate/>
            <Input id="message" s={12} label="Message" type="textarea" value={this.state.message} onChange={this.onInputChange} maxLength="1200" validate required/>
          </Row>
          <Button className="submitButton" waves="light" type="submit" value="Post">Submit</Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
