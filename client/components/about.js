import React from 'react';
import { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div id="about-content">
        <p><img className="about-image" src='../assets/cheri_working.jpg' />Cheri's Creative Celebrations uses only "The Very Best" Qualatex ™ balloons. Qualatex ™ latex balloons "are biodegradable, and decompose as fast as an oak leaf in your backyard!" Cheri's Creative Celebrations has been in business since April 2014. However, Cheri has over 10 years experience in working with balloons and has her Floral Design Certificate from Santa Rosa Junior College.</p>
        <p>Some things you may not have known about balloons that Cheri finds interesting.  Qualatex ™ <a href="http://www.qualatex.com/pages/facts.php" target="blank">Little know balloon facts</a></p>
      </div>
    );  
  }
}
