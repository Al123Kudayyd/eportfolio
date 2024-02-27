import React from 'react'
import about from '../assests/about.png'
import AboutService from './AboutService'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";

function About() {
  return (
    <div className='relative '>
      
        
        <img src={about} className='absolute -top-32 w-[50%] lg:w-[50%] shadow-2xl right-4 lg:right-12' />
    </div>
  )
}

export default About