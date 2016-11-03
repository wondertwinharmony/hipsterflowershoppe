import React from 'react';
import { Component } from 'react';
import Slider from 'react-slick';

// fade true, centerMode needs to be true or else imgs get weird
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
          <span>A day without flowers is like a heart without memories.
          <br />
          ~Carolyn Ericson
          </span>
        <Slider className="sliderImg" {...settings}>
          <div><img src='/assets/flowerAssets/weddings/wedding1.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding2.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding3.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding4.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding5.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding6.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding7.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding8.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding9.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding10.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding11.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding12.jpg' /></div>
          <div><img src='/assets/flowerAssets/weddings/wedding13.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
