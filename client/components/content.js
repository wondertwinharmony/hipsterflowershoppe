import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Footer, Button, Row, Col} from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import Home from './home.js';
import About from './about.js';
import Balloons from './balloons.js';
import Flowers from './flowers.js';
import Contact from './contact.js';

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
      success: function(data) {
        //TO-DO: Have a modal pop up when an inquiry has been successfully sent to the server
        console.log("data on successful ajax: ", data);
      },
      error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
      }
    });
  }

  render() {
    var partial;

    if (this.state.currentPage === '#/') {
      partial = <Home />;
    } else if (this.state.currentPage === '#/about') {
      partial = <About />;
    } else if (this.state.currentPage === '#/balloons') {
      partial = <Balloons />;
    } else if (this.state.currentPage === '#/flowers') {
      partial = <Flowers />;
    } else if (this.state.currentPage === '#/contact') {
      console.log("props: ", this.props);
      partial = <Contact onContactSubmit={this.handleContactFormSubmit} />;
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
              <Button className='navButton' waves='light' href="#/" onClick={this.onContentChange}>Home</Button>
              <Button className='navButton' waves='light' href="#/about" onClick={this.onContentChange}>About</Button>
              <Button className='navButton' waves='light' href="#/balloons" onClick={this.onContentChange}>Balloons</Button>
              <Button className='navButton' waves='light' href="#/flowers" onClick={this.onContentChange}>Floral Designs</Button>
              <Button className='navButton' waves='light' href="#/contact" onClick={this.onContentChange}>Contact</Button>
            </Col>
          </Row>
      </div>
        {partial}
      <Footer copyrights="&copy; 2015 Copyright Cheri's Creative Celebrations. All Rights Reserved."   links={
        <ul>
          <h5 className="white-text">Follow Us On</h5>
          <ul>
            <li className="grey-text text-lighten-3 social"><a className="social-btn" href="https://www.facebook.com/cheri.creativecelebrations/" target="_blank"><FontAwesome name="facebook-square" size="2x"/></a></li>
            <li className="grey-text text-lighten-3 social"><a className="social-btn" href="https://www.instagram.com/clrw70/" target="_blank"><FontAwesome name="instagram" size="2x"/></a></li>
            <li className="grey-text text-lighten-3 social"><a className="social-btn" href="https://www.pinterest.com/chericreativece/" target="_blank"><FontAwesome name="pinterest-square" size="2x"/></a></li>
            <li className="grey-text text-lighten-3 social"><a className="social-btn" href="" target="_blank"><FontAwesome name="twitter-square" size="2x"/></a></li>     
          </ul>
          <li><a className="grey-text text-lighten-3" href="#/about" onClick={this.onContentChange}>About</a></li>
          <li><a className="grey-text text-lighten-3" href="#/balloons" onClick={this.onContentChange}>Balloon Decorations</a></li>
          <li><a className="grey-text text-lighten-3" href="#/flowers" onClick={this.onContentChange}>Floral Designs</a></li>
          <li><a className="grey-text text-lighten-3" href="#/contact" onClick={this.onContentChange}>Contact Info</a></li>
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
