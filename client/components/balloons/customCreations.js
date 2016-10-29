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
          <span>Nobody can be uncheered with a balloon.
          <br />
          ~A.A. Milne (Winnie-the-Pooh)
          </span>
        <Slider {...settings}>
          <div><img src='/assets/balloonAssets/customCreations/custom1.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom2.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom3.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom4.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom5.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom6.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom7.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom8.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom9.jpg' /></div>
          <div><img src='/assets/balloonAssets/customCreations/custom10.jpg' /></div>
        </Slider>
        </div>
      </div>
    );
  }
});

export default SimpleSlider;
