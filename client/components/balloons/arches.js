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
        <span>Arches</span>
        <Slider {...settings}>
          <div><img src='/assets/balloonAssets/arches/arch1.jpg' /></div>
          <div><img src='/assets/balloonAssets/arches/arch2.jpg' /></div>
          <div><img src='/assets/balloonAssets/arches/arch3.jpg' /></div>
          <div><img src='/assets/balloonAssets/arches/arch4.jpg' /></div>
          <div><img src='/assets/balloonAssets/arches/arch5.jpg' /></div>
          <div><img src='/assets/balloonAssets/arches/arch6.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
