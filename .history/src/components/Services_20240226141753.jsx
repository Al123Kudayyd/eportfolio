import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Services() {
    

  return (
    <div>
        <div className='bg-black min-h-[500px]'>
        <Carousel className='text-white text-center' responsive={responsive}>
            <div >Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel>
        </div>
    </div>
  )
}

export default Services