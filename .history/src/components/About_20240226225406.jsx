import React from 'react'
import about from '../assests/about.png'

function About() {
  return (
    <div className=''>
        <div className='relative border-2 border-[#6C63FF] m-7'>
            <h1 className='text-left absolute -translate-[50%] text-[#6C63FF] py-10 left-[10%] max-w-[1400px] text-5xl font-bold'>
                About Us
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Labore, sunt eum in ipsam aperiam, ipsa praesentium sit nobis <br /> facere sapiente expedita voluptate ipsum impedit quam ea quos amet debitis culpa.</p>
            
        </div>
        <img src={about} className='absolute top-0 w-[30%] shadow-2xl right-16' />
    </div>
  )
}

export default About