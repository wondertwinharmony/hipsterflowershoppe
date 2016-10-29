import React from 'react';
import { Component } from 'react';
import Slider from 'react-slick';

const SimpleSlider = React.createClass({
  render: function () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
      fade: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="flowers-content">
        <span>Sympathy Designs</span>
        <Slider className="sliderImg" {...settings}>
          <div><img src='/assets/flowerAssets/sympathyDesigns/sympathy1.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
