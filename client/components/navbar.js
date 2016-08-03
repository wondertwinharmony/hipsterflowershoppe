// var React = require('react');
// var ReactDOM = require('react-dom');
// var Navbar = require('react-materialize').Navbar;
// var NavItem = require('react-materialize').NavItem;
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, Button } from 'react-materialize';

var Topbar = React.createClass({
  render: function() {
    return (
      <Navbar className='pink darken-1 parent' brand={'Cheri\'s Creative Celebrations'} right>
        <Button className='navButton' waves='light'>About</Button>
        <Button className='navButton' waves='light'>Contact</Button>
        <Button className='navButton' waves='light'>Testimonials</Button>
      </Navbar>
    );
  }
});
ReactDOM.render(<Topbar />, document.getElementById('navbar'));
