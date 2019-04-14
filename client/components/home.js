import React from 'react';
import { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
    <div id="home-content">
      <p>Cheri's Creative Celebrations specializes in balloon art. Our decorations will guarantee to make your function truly special. We recommend that you contact us directly to discuss your event decoration needs. We will be happy to offer you our professional advice and provide you with a quote based on your needs and budget.</p>
      <div className="smartBalloonContainer"><a className="smartBalloonLink" href="http://www.theballooncouncil.org/smart-balloon-practices/" target="_blank"><img className="smartBalloonImg" src="../assets/smartBalloon.jpg"/></a></div>
      <ul>
        <li className="listTitle">Balloon decorations for:</li>
        <li>Sporting events</li>
        <li>School rallies</li>
        <li>School Graduations</li>
        <li>Project Graduation</li>
        <li>Class reunions</li>
        <li>Birthday parties</li>
        <li>Baby showers</li>
        <li>Wedding showers</li>
        <li>Corporate events</li>
      </ul>
    </div>
    );
  }
}
