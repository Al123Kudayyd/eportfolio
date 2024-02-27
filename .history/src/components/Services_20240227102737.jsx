import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import service from '../assests/service.png'
import service1 from '../assests/service1.png'
import service2 from '../assests/service2.png'

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
        <h1 className='text-'>Services</h1>
        <div className='min-h-[400px] lg:min-h-[700px] text-center '>
        <Slider className='text-black  italic' {...settings}>
      <div className='relative'>
        <img src={service} className='w-1/4 translate-x-[150%]' alt="" />
        <h1 className='text-xl lg:text-4xl'>Your service</h1>
        <p className='text-md'>Add the service you will be providing!</p>
      </div>
      <div>
        <img src={service1} className='w-1/4 translate-x-[150%]' alt="" />
        <h3 className='text-xl lg:text-4xl'>Your Serivce</h3>
        <p className='text-md'>Add the service you will be providing!</p>
      </div>
      <div>
        <img src={service2} className='w-1/4 translate-x-[150%]' alt="" />
        <h3 className='text-xl lg:text-4xl'>Your Serivce</h3>
        <p className='text-md'>Add the service you will be providing!</p>
      </div>
      </Slider>
        </div>
    </div>
  )
}

export default Services