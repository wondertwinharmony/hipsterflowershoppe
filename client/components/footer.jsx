import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from 'react-materialize';
import FontAwesome from 'react-fontawesome';

var Bottombar = React.createClass({
  render: function() {
    return (
      <Footer className="teal lighten-1" copyrights="&copy; 2015 Copyright Cheri's Creative Celebrations. All Rights Reserved."   links={
        <ul>
          <h5 className="white-text">Follow Us On</h5>
          <li className="grey-text text-lighten-3"><a className="facebook-btn" href="https://www.facebook.com/cheri.creativecelebrations/" target="_blank"><FontAwesome name="facebook-official" size="2x"/></a></li>
          <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Balloon Decorations</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Floral Designs</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Contact Info</a></li>
        </ul>
      }>
        <h5 className="white-text">Cheri's Creative Celebrations</h5>
        <p className="contact-footer">Located in Santa Rosa, CA</p>
        <p className="contact-footer">Available by appointment</p>
        <p className="contact-footer">Cheri Winter</p>
        <p className="contact-footer">Phone: (707)###-####</p>
        <p className="contact-footer">Email: cheri.creativecelebrations@gmail.com</p>
        <p className="photographers">
        Photos provided by <a href="https://www.facebook.com/AudraVonGlahnPhotography" target="_blank">Audra Von Glahn Photography</a>, <a href="https://www.facebook.com/MindyBreslinPhotography" target="_blank">Mindy Breslin Photography</a>, <a href="http://www.foothillphotographyonline.com/" target="_blank">Foothill Photography</a>, and <a href="http://www.rachellomeli.com/" target="_blank">Rachel Lomeli Photography</a>
        </p>
        <p className="webdevs">Website Design provided by <a href="#!" target="_blank">Kristine Yabut</a> and <a href="#!" target="_blank">Gabriel Schrock</a>
        </p>
      </Footer>
    );
  }
});

ReactDOM.render(<Bottombar />, document.getElementById('footer'));
