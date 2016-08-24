import React from 'react';
import { Component } from 'react';
import Slider from 'react-slick';

// export default class Balloons extends Component {
//   render() {
//       var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div id='balloons-content'>
//         <Slider {...settings}>
//           <div><h3>1</h3></div>
//           <div><h3>2</h3></div>
//           <div><h3>3</h3></div>
//           <div><h3>4</h3></div>
//           <div><h3>5</h3></div>
//           <div><h3>6</h3></div>
//         </Slider>
//       </div>
//     );  
//   }
// }


// var React = require('react');
// var Slider = require('react-slick');

const SimpleSlider = React.createClass({
  render: function () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: false,
      // variableWidth: true,
      // adapativeHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="balloons-content">
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;