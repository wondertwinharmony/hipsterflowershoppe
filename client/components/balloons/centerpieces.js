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
        <span>Centerpieces</span>
        <Slider {...settings}>
          <div><img src='/assets/balloonAssets/centerpieces/centerpiece1.jpg' /></div>
          <div><img src='/assets/balloonAssets/centerpieces/centerpiece2.jpg' /></div>
          <div><img src='/assets/balloonAssets/centerpieces/centerpiece3.jpg' /></div>
          <div><img src='/assets/balloonAssets/centerpieces/centerpiece4.jpg' /></div>
          <div><img src='/assets/balloonAssets/centerpieces/centerpiece5.jpg' /></div>
          <div><img src='/assets/balloonAssets/centerpieces/centerpiece6.jpg' /></div>
          <div><img src='/assets/balloonAssets/centerpieces/centerpiece7.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
