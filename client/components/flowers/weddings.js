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
      adaptiveHeight: true,
      fade: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="flowers-content">
        <span>Weddings</span>
        <Slider className="sliderImg" {...settings}>
          <div><img src='../assets/Flowers1.jpg' /></div>
          <div><img src='../assets/Flowers2.jpg' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
