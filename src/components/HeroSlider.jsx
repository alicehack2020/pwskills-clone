import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { images } from '../data';
const HeroSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="mt-4 overflow-hidden">
      <Slider {...settings}>
        {
          images.map((e,index) => (
            <div key={index}>
              <img src={e} alt="" />
          </div>
          ))
        }
      
    </Slider>
  </div>
  )
}

export default HeroSlider