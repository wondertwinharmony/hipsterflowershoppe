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
        <Slider {...settings}>
          <div><img src='/assets/balloonAssets/columns/column1.jpg' /></div>
          <div><img src='/assets/balloonAssets/columns/column2.jpg' /></div>
          <div><img src='/assets/balloonAssets/columns/column3.jpg' /></div>
          <div><img src='/assets/balloonAssets/columns/column4.jpg' /></div>
          <div><img src='/assets/balloonAssets/columns/column5.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
