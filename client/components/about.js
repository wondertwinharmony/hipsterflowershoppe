import React from 'react';
import { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div id="about-content">
        <img className="about-image" src='../assets/cheri_working.jpg' />
        <p>Cheri's Creative Celebrations uses only "The Very Best" Qualatex ™ balloons. Qualatex ™ latex balloons "are biodegradable, and decompose as fast as an oak leaf in your backyard!" Cheri's Creative Celebrations has been in business since April 2014. However, Cheri has over 10 years experience in working with balloons.</p>
        <p>Some things you may not have known about balloons that Cheri finds interesting.  Qualatex ™ <a href="http://www.qualatex.com/pages/facts.php" target="blank">Little-known balloon facts</a></p>
        <p className="quote">""Life should not only be lived, it should be celebrated.""
          <br />
          ~Osho
        </p>
      </div>
    );  
  }
}
