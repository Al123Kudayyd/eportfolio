import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import AboutService from './AboutService';

function Contact( { button } ) {
  return (
    <div className='my-24'>
        <h1 className='text-5xl py-5'>Contact us</h1>
        <div className='h-1 flex justify-center m-auto w-14 bg-[#6C63FF] text-center'></div>
        <AboutService text= button={<IoPersonOutline />} />
    </div>
  )
}

export default Contact