import React from 'react'
import about from '../assests/about.png'
import AboutService from './AboutService'

function About() {
  return (
    <div className='relative '>
      <div className='relative border-2 border-[#6C63FF] m-5'>
        <div className=' flex flex-col items-center '>
            <h1 className='text-center absolute  text-[#6C63FF] pt-5 text-5xl font-bold '>
                About Us
            </h1>
            <p className='md:w-1/2 lg:w-1/4 mt-20 text-xl text-gray-500 p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptatem modi dolore sunt praesentium aut deleniti quia suscipit laboriosam iure reiciendis architecto expedita tempore ipsam officiis, doloremque at repellendus ducimus.</p>    
            <button className='bg-[#6C63FF] text-white border border-[#6C63FF] px-7 py-3 mb-5 hover:bg-white 
            hover:text-[#6C63FF] transitio duration-300'>
              LEARN MORE
            </button>
        </div>
        </div>
        
        <img src={about} className='absolute -top-28 w-[45%] lg:w-[30%] shadow-2xl right-4 lg:right-16' />
    </div>
  )
}

export default About