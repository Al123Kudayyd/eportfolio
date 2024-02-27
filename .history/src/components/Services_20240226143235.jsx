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
        <div className='translate-y-[50%] min-h-[500px] text-center'>
        <Slider className='text-black text-3xl' {...settings}>
          <div className='flex'>
          <div>
            <h3>Your service</h3>
            <h3>Your service</h3>
            <h3>Your service</h3>
            <div>
              <h3 className='origin-center rotate-90'>Your service</h3>
            </div>
          </div>
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