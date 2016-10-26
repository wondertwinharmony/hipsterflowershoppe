import React from 'react';
import { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
    <div id="home-content">
      <p>Cheri's Creative Celebrations specializes in balloon art and floral decorations. Our decorations will guarantee to make your function truly special. We recommend that you contact us directly to discuss your event decoration needs. We will be happy to offer you our professional advice and provide you with a quote based on your needs and budget.</p>
      <div className="smartBalloonContainer"><a className="smartBalloonLink" href="http://www.theballooncouncil.org/smart-balloon-practices/" target="_blank"><img className="smartBalloonImg" src="https://dk-media.s3.amazonaws.com/media/1k8es/images/17044902/huge/SmartBalloonIconWeb1.jpg" alt="SmartBalloonIconWeb1.jpg"/></a></div>
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
      <ul>
        <li className="listTitle">Floral designs for:</li>
        <li>School dances (corsages and boutonnieres)</li>
        <li>Anniversary Parties</li>
        <li>Weddings</li>
        <li>Celebrations of Life</li>
      </ul>
    </div>
    );
  }
}
