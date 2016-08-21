import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Navbar, Button } from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import Home from './home.js';
import About from './about.js';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: '#!/'};

    this.onContentChange = this.onContentChange.bind(this);
  }

  onContentChange(event) {
    this.setState({currentPage: event.target.getAttribute('href')});
  }

  render() {
    var partial;

    if (this.state.currentPage === '#!/') {
      partial = <Home />;
    } else if (this.state.currentPage === '#!/about') {
      partial = <About />;
    }

    return (
      <div>
      <Navbar className='pink darken-1 parent' brand={'Cheri\'s Creative Celebrations'} right>
        <Button className='navButton' waves='light' href="#!/" onClick={this.onContentChange}>Home</Button>
        <Button className='navButton' waves='light' href="#!/about" onClick={this.onContentChange}>About</Button>
        <Button className='navButton' waves='light'>Balloon Decor</Button>
        <Button className='navButton' waves='light'>Floral Designs</Button>
        <Button className='navButton' waves='light'>Contact</Button>
      </Navbar>
        {partial}
      <Footer className="teal lighten-1" copyrights="&copy; 2015 Copyright Cheri's Creative Celebrations. All Rights Reserved."   links={
        <ul>
          <h5 className="white-text">Follow Us On</h5>
          <li className="grey-text text-lighten-3"><a className="facebook-btn" href="https://www.facebook.com/cheri.creativecelebrations/" target="_blank"><FontAwesome name="facebook-official" size="2x"/></a></li>
          <li><a className="grey-text text-lighten-3" href="#!/about" onClick={this.onContentChange}>About</a></li>
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
