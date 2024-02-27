import React from 'react'
import about from '../assests/about.png'
import AboutService from './AboutService'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";

function About() {
  return (
    <div className='relative '>
      <div className='relative border-2 border-[#6C63FF] m-5'>
        <div className='pl-10 flex flex-col '>
            <h1 className='text-left text-[#6C63FF] pt-5 text-6xl font-bold '>
                About Us
            </h1>
            <p className='md:w-1/2 lg:w-1/4 mt-10 text-xl text-gray-500 p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptatem modi dolore sunt praesentium aut deleniti quia suscipit laboriosam iure reiciendis architecto expedita tempore ipsam officiis, doloremque at repellendus ducimus.</p>    
            <button className='bg-[#6C63FF] text-white border border-[#6C63FF] px-7 py-3 mb-5 hover:bg-white 
            hover:text-[#6C63FF] transitio duration-300 lg:w-1/4 w-3/4'>
              LEARN MORE
            </button>
        </div>
        <AboutService button={<IoPersonOutline />} button1={<MdOutlineEmail />} button2={<IoCheckmarkOutline />} 
        para={<div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Pariatur nulla odio autem dicta libero quas incidunt aperiam delectus tempore! <br />Magni cumque autem delectus porro molestiae natus quod, laborum itaque at!</div>} />
        </div>
        
        <img src={about} className='absolute -top-32 w-[50%] lg:w-[50%] shadow-2xl right-4 lg:right-12' />
    </div>
  )
}

export default About