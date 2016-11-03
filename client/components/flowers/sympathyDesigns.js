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
      <div id="flowers-content">
        <Slider className="sliderImg" {...settings}>
          <div><img src='/assets/flowerAssets/sympathyDesigns/sympathy1.jpg' /></div>
          <div><img src='/assets/flowerAssets/sympathyDesigns/sympathy2.jpg' /></div>
          <div><img src='/assets/flowerAssets/sympathyDesigns/sympathy3.jpg' /></div>
          <div><img src='/assets/flowerAssets/sympathyDesigns/sympathy4.jpg' /></div>
          <div><img src='/assets/flowerAssets/sympathyDesigns/sympathy5.jpg' /></div>
          <div><img src='/assets/flowerAssets/sympathyDesigns/sympathy6.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
