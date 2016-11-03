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
        <Slider className="sliderImg" {...settings}>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb1.jpg' /></div>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb2.jpg' /></div>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb3.jpg' /></div>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb4.jpg' /></div>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb5.jpg' /></div>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb6.jpg' /></div>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb7.jpg' /></div>
          <div><img src='../assets/flowerAssets/corsagesBoutonnieres/cb8.jpg' /></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
