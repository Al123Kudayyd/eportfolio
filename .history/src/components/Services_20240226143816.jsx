import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Services() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=''>
        <div className=' min-h-[500px] text-center bg-[#b0b0b0]'>
        <Slider className='text-black text-4xl translate-y-[50%]' {...settings}>
      <div>
        <h3>Your service</h3>
      </div>
      <div>
        <h3>Your Serivce</h3>
      </div>
      <div>
        <h3>Your Serivce</h3>
      </div>
      </Slider>
        </div>
    </div>
  )
}

export default Services