import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, Button } from 'react-materialize';

export default class Topbar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("state in topbar: ", this.state);
    return (
      <Navbar className='pink darken-1 parent' brand={'Cheri\'s Creative Celebrations'} right>
        <Button className='navButton' waves='light'>About</Button>
        <Button className='navButton' waves='light'>Contact</Button>
        <Button className='navButton' waves='light'>Testimonials</Button>
      </Navbar>
    );
  }
}
