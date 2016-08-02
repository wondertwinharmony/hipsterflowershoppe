// var React = require('react');
// var ReactDOM = require('react-dom');
// var Navbar = require('react-materialize').Navbar;
// var NavItem = require('react-materialize').NavItem;
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';

var Topbar = React.createClass({
  render: function() {
    return (
      <Navbar brand='logo' right>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    );
  }
});
ReactDOM.render(<Topbar />, document.getElementById('navbar'));
