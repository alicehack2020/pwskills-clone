import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrandData } from '../data';
const MultiSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Adjust as needed
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 768, // Adjust as needed
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 468, // Adjust as needed
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };
  return (
    <div className='mx-auto mt-10 pt-9 bg-slate-200 overflow-hidden'>
    <h2 className='text-center text-blue-500 font-bold text-4xl'>Our Achiever's Work with</h2>
          <Slider {...settings} className='mt-16'>
          {
            BrandData.map((e, index) => { 
                return <div key={index}>
                    <img className='h-36' src={e.img} alt="" />
                </div>
            })
              }
            <div>
            
          </div> 
     
    </Slider>
  </div>
  )
}

export default MultiSlider