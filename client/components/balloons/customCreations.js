import React from 'react';
import { Component } from 'react';
import Slider from 'react-slick';

// with no fade, centerMode must be false or imgs get weird
const SimpleSlider = React.createClass({
  render: function () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="balloons-content">
        <div id="sliderContainer">
        <span>Custom Creations</span>
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
        </div>
      </div>
    );
  }
});

export default SimpleSlider;
