import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, Button } from 'react-materialize';

export default class Topbar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div>
          <svg id="pink">
              <text x="0" y="0">
                <tspan x="1.8em" y="1em">CHERI'S</tspan>
                <tspan x="1.2em" y="2em">CREATIVE</tspan>
                <tspan x="0.5em" y="3em">CELEBRATIONS</tspan>
              </text>
              <pattern id="pink-pattern" patternUnits="userSpaceOnUse"
                         width="500" height="281" viewbox="0 0 500 281">
              <image href="http://casablancasunset.com/wp-content/uploads/2013/12/washed-out-paracosm.jpg" width="500" height="281" />
            </pattern>
          </svg>
        </div>
      <Navbar className='pink darken-1 parent' brand={'Cheri\'s Creative Celebrations'} right>
        <Button className='navButton' waves='light'>About</Button>
        <Button className='navButton' waves='light'>Contact</Button>
        <Button className='navButton' waves='light'>Testimonials</Button>
      </Navbar>
      </div>
    );
  }
}
