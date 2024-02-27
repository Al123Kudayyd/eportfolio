import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import service from '../assests/service.png'

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
        <div className=' min-h-[500px] text-center '>
        <Slider className='text-black text-4xl italic' {...settings}>
      <div className='relative'>
        <img src={service} className='w-1/4 translate-x-[160%]' alt="" />
        <h1>Your service</h1>
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