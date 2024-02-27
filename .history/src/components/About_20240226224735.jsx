import React from 'react'
import about from '../assests/about.png'

function About() {
  return (
    <div className=''>
        <div className='relative border-4 border-[#6C63FF] m-7'>
            <h1 className='text-left absolute -translate-[50%] text-[#6C63FF] py-10 left-[10%] max-w-[1400px] text-5xl font-bold'>
                About Us
            </h1>
            <img src={about}  className='absolute w-1/2' />
        </div>
    </div>
  )
}

export default About