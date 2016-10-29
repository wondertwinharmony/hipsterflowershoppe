import React from 'react';
import { Component } from 'react';
import Slider from 'react-slick';

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
        <span>Parade Floats</span>
        <Slider {...settings}>
          <div><img src='/assets/balloonAssets/paradeFloats/parade1.jpg' /></div>
          <div><img src='/assets/balloonAssets/paradeFloats/parade2.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
