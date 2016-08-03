import React from 'react';
import ReactDOM from 'react-dom';
import { Footer, Button } from 'react-materialize';
import FontAwesome from 'react-fontawesome';

var Bottombar = React.createClass({
  render: function() {
    return (
      <Footer className="teal darken-1" copyrights="&copy; 2015 Copyright Cheri's Creative Celebrations. All Rights Reserved."   links={
        <ul>
          <h5 className="white-text">Connect</h5>
          <li className="grey-text text-lighten-3"><a className="facebook-btn" href="#!"><FontAwesome name="facebook-official" size="2x"/></a></li>
          <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Balloon Decorations</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Floral Designs</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Contact Info</a></li>
        </ul>
      }>
        <h5 className="white-text">Cheri's Creative Celebrations</h5>
        <p className="contact-footer">Located in Santa Rosa, CA</p>
        <p className="contact-footer">Available by appointment only</p>
        <p className="contact-footer">Cheri Winter</p>
        <p className="contact-footer">Phone: (707)###-####</p>
        <p className="contact-footer">Email: cheri.creativecelebrations@gmail.com</p>
        <p className="photographers">
        Photos Provided by: <a href="#!">Audra Von Glahn Photography</a>, <a href="#!">Mindy Breslin Photography</a>, <a href="#!">Foothill Photography</a>, and <a href="#!">Rachel Lomeli Photography</a>
        </p>
        <p className="webdevs">Website Design provided by: <a href="#!">Kristine Yabut</a> and <a href="#!">Gabriel Schrock</a>
        </p>
      </Footer>
    );
  }
});

ReactDOM.render(<Bottombar />, document.getElementById('footer'));
