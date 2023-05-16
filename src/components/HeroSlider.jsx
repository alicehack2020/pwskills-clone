import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="mt-4">
    <Slider {...settings}>
      <div>
         <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="" />
      </div>
      <div>
         <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="" />
      </div>
      <div>
         <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="" />
      </div>
      <div>
         <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="" />
      </div>
      
    </Slider>
  </div>
  )
}

export default HeroSlider