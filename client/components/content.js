import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Footer, Button, Row, Col, Dropdown, NavItem } from 'react-materialize';
import { default as swal } from 'sweetalert2';
import FontAwesome from 'react-fontawesome';
import Home from './home.js';
import About from './about.js';
import CustomCreations from './balloons/customCreations.js';
import Centerpieces from './balloons/centerpieces.js';
import Arches from './balloons/arches.js';
import Columns from './balloons/columns.js';
import ParadeFloats from './balloons/paradeFloats.js';
import Bouquets from './balloons/bouquets.js';
import Drops from './balloons/drops.js';
import Weddings from './flowers/weddings.js';
import SympathyDesigns from './flowers/sympathyDesigns.js';
import CorsagesBoutonnieres from './flowers/corsagesBoutonnieres.js';
import AnniversaryParties from './flowers/anniversaryParties.js';
import Arrangements from './flowers/arrangements.js';
import Leis from './flowers/leis.js';
import Contact from './contact.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: '#/'};

    this.onContentChange = this.onContentChange.bind(this);
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
  }

  onContentChange(event) {
    this.setState({currentPage: event.target.getAttribute('href')});
  }

  handleContactFormSubmit(contactInfo) {
    $.ajax({
      url: '/contact',
      dataType: 'json',
      type: 'POST',
      data: contactInfo,
      complete: function(data, status) {
        var message = '';
        if(status === "success"){
          message = data.responseJSON.message + "\n Thank you for contacting Cheri's Creative Celebrations. \nWe will get back to you soon.";
          // swal("Inquiry Submitted!", message, "success");
          swal({
            title: "Inquiry Submitted!",
            text: message,
            type: "success",
            allowOutsideClick: true
          });
        } else {
          message = "We're sorry! There was an error sending your message." + ' ' + data.responseText;
          // swal("Oh no!", message, "error");
          swal({
            title: "Oh no!",
            text: message,
            type: "error",
            width: "60%",
            allowOutsideClick: false
          });
        }
      }
    });
  }


  render() {
    var partial;

    if (this.state.currentPage === '#/') {
      partial = <Home />;
    } else if (this.state.currentPage === '#/about') {
      partial = <About />;
    } else if (this.state.currentPage === '#/customCreations') {
      partial = <CustomCreations />;
    } else if (this.state.currentPage === '#/centerpieces') {
      partial = <Centerpieces />;
    } else if (this.state.currentPage === '#/arches') {
      partial = <Arches />;
    } else if (this.state.currentPage === '#/columns') {
      partial = <Columns />;
    } else if (this.state.currentPage === '#/paradeFloats') {
      partial = <ParadeFloats />;
    } else if (this.state.currentPage === '#/bouquets') {
      partial = <Bouquets />;
    } else if (this.state.currentPage === '#/drops') {
      partial = <Drops />;
    } else if (this.state.currentPage === '#/weddings') {
      partial = <Weddings />;
    } else if (this.state.currentPage === '#/sympathyDesigns') {
      partial = <SympathyDesigns />;
    } else if (this.state.currentPage === '#/corsagesBoutonnieres') {
      partial = <CorsagesBoutonnieres />;
    } else if (this.state.currentPage === '#/anniversaryParties') {
      partial = <AnniversaryParties />;
    } else if (this.state.currentPage === '#/arrangements') {
      partial = <Arrangements />;
    } else if (this.state.currentPage === '#/leis') {
      partial = <Leis />;
    } else if (this.state.currentPage === '#/contact') {
      partial = <Contact onContactSubmit={this.handleContactFormSubmit}/>;
    }
    
    
    return (
      <div>
        <div className="parent">
          <div className="logoContainer">
            <div className="balloonContainer">
              <div className="balloon">
                  <div><span className="letters">C</span>
                  </div>
                  <div><span className="letters">H</span>
                  </div>
                  <div><span className="letters">E</span>
                  </div>
                  <div><span className="letters">R</span>
                  </div>
                  <div><span className="letters">I<span className="apostrophe">'</span></span>
                  </div>
                  <div><span className="letters">S</span>
                  </div>
              </div>
            </div>
            <div className="title">Creative Celebrations</div>
        </div>
          <Row>
            <Col s={12} m={12} l={12} className='navButtonsCenter'>
              <Button className='navButton teal lighten-1' waves='light' href="#/" onTouchTap={this.onContentChange}>Home</Button>
              <Button className='navButton teal lighten-1' waves='light' href="#/about" onTouchTap={this.onContentChange}>About</Button>
              <Dropdown className='navButton teal lighten-1' waves='light' trigger={
              <Button waves='light'>Balloon Decor</Button>
                }>
                <NavItem href="#/customCreations" onTouchTap={this.onContentChange}>Custom Creations</NavItem>
                <NavItem href="#/centerpieces" onTouchTap={this.onContentChange}>Centerpieces</NavItem>
                <NavItem href="#/arches" onTouchTap={this.onContentChange}>Arches</NavItem>
                <NavItem href="#/columns" onTouchTap={this.onContentChange}>Columns</NavItem>
                <NavItem href="#/paradeFloats" onTouchTap={this.onContentChange}>Parade Floats</NavItem>
                <NavItem href="#/bouquets" onTouchTap={this.onContentChange}>Bouquets</NavItem>
                <NavItem href="#/drops" onTouchTap={this.onContentChange}>Drops</NavItem>
              </Dropdown>
              <Dropdown trigger={
              <Button className='navButton teal lighten-1' waves='light'>Floral Designs</Button>
                }>
                <NavItem href="#/weddings" onTouchTap={this.onContentChange}>Weddings</NavItem>
                <NavItem href="#/sympathyDesigns" onTouchTap={this.onContentChange}>Sympathy Designs</NavItem>
                <NavItem href="#/corsagesBoutonnieres" onTouchTap={this.onContentChange}>Corsages & Boutonnieres</NavItem>
                <NavItem href="#/anniversaryParties" onTouchTap={this.onContentChange}>Anniversary Parties</NavItem>
                <NavItem href="#/arrangements" onTouchTap={this.onContentChange}>Arrangements</NavItem>
                <NavItem href="#/leis" onTouchTap={this.onContentChange}>Leis</NavItem>
              </Dropdown>
              <Button className='navButton teal lighten-1' waves='light' href="#/contact" onTouchTap={this.onContentChange}>Contact</Button>
            </Col>
          </Row>
      </div>
        {partial}
      <Footer copyrights="&copy; 2015 Copyright Cheri's Creative Celebrations. All Rights Reserved."   links={
        <ul>
          <h5 className="white-text">Follow Us On</h5>
          <ul>
            <li className="white-text social"><a className="social-btn" href="https://www.facebook.com/cheri.creativecelebrations/" target="_blank"><FontAwesome name="facebook-square" size="2x"/></a></li>
            <li className="white-text social"><a className="social-btn" href="https://www.instagram.com/clrw70/" target="_blank"><FontAwesome name="instagram" size="2x"/></a></li>
            <li className="white-text social"><a className="social-btn" href="https://www.pinterest.com/chericreativece/" target="_blank"><FontAwesome name="pinterest-square" size="2x"/></a></li>
            <li className="white-text social"><a className="social-btn" href="" target="_blank"><FontAwesome name="twitter-square" size="2x"/></a></li>     
          </ul>
          <li><a className="grey-text text-lighten-3" href="#/about" onTouchTap={this.onContentChange}>About</a></li>
          <li><a className="grey-text text-lighten-3" href="#/balloons" onTouchTap={this.onContentChange}>Balloon Decorations</a></li>
          <li><a className="grey-text text-lighten-3" href="#/flowers" onTouchTap={this.onContentChange}>Floral Designs</a></li>
          <li><a className="grey-text text-lighten-3" href="#/contact" onTouchTap={this.onContentChange}>Contact Info</a></li>
        </ul>
      }>
        <h5 className="white-text">Cheri's Creative Celebrations</h5>
        <p className="contact-footer">Located in Santa Rosa, CA</p>
        <p className="contact-footer">Available by appointment</p>
        <p className="contact-footer">Cheri Winter</p>
        <p className="contact-footer">Phone: (707)###-####</p>
        <p className="contact-footer">Email: cheri.creativecelebrations@example.com</p>
        <p className="photographers">
        Photos provided by <a href="https://www.facebook.com/AudraVonGlahnPhotography" target="_blank">Audra Von Glahn Photography</a>, <a href="https://www.facebook.com/MindyBreslinPhotography" target="_blank">Mindy Breslin Photography</a>, <a href="http://www.foothillphotographyonline.com/" target="_blank">Foothill Photography</a>, and <a href="http://www.rachellomeli.com/" target="_blank">Rachel Lomeli Photography</a>
        </p>
        <p className="webdevs">Website Design provided by <a href="https://www.linkedin.com/in/kyabut1" target="_blank">Kristine Yabut</a> and <a href="https://www.linkedin.com/in/gabrielschrock" target="_blank">Gabriel Schrock</a>
        </p>
      </Footer>
      </div>
    );
  }
}

ReactDOM.render(<Content />, document.getElementById('content'));

/**
  Need to decide which of these to use in final title implementation
  http://casablancasunset.com/wp-content/uploads/2013/12/washed-out-paracosm.jpg
  https://s3-us-west-2.amazonaws.com/s.cdpn.io/131611/flower-bloom.gif
    
        <svg id="white">
            <text x="0" y="0">
              <tspan x="1.2em" y="2.0em">CREATIVE CELEBRATIONS</tspan>
            </text>
            <pattern id="white-pattern" patternUnits="userSpaceOnUse"
                       width="500" height="281" viewbox="0 0 500 281">
              <image href="  http://casablancasunset.com/wp-content/uploads/2013/12/washed-out-paracosm.jpg" width="500" height="281" />
            </pattern>
          </svg>
 */
