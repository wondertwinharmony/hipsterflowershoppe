import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row } from 'react-materialize';

class ContactForm extends Component {
  render() {
    return (
      <div id="contact-content">
        <h4>Contact Us!</h4>
        <h5 className='contact-us-email'><a className='contact-us-email-text' href = "mailto: cheri.creativecelebrations@gmail.com">cheri.creativecelebrations@gmail.com</a></h5>
        <h5 className='contact-us-phone'>(707) 387-4138</h5>
        <Row>
          <ul className='social-list'>
            <li><a className="contact-list-item contact-list-item" href="https://www.facebook.com/cheri.creativecelebrations/" target="_blank"><FontAwesome name="facebook-square" size="4x"/></a></li>
            <li><a className="contact-list-item contact-list-item" href="https://www.instagram.com/creativeceles/" target="_blank"><FontAwesome name="instagram" size="4x"/></a></li>
            <li><a className="contact-list-item contact-list-item" href="https://www.pinterest.com/chericreativece/" target="_blank"><FontAwesome name="pinterest-square" size="4x"/></a></li>
          </ul>
        </Row>
      </div>
    );
  }
}

export default ContactForm;
