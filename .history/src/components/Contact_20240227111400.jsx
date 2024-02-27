import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className='my-24'>
        <h1 className='text-5xl py-5'>Contact us</h1>
        <div className='h-1 flex justify-center m-auto w-14 bg-[#6C63FF] text-center'></div>
        <div className='my-10'>
            <form className='flex flex-col items-center relative text-2xl space-y-5'>
                <div className='realtive border-2'>
                    <input type="text" placeholder='Name' className='pl-14 pr-20 py-3' />
                    <IoPersonOutline className='absolute top-[5%] text-4xl' />
                </div>
                <div className='realtive border-2'>
                    <input type="email" placeholder='Email' className='pl-14 pr-20 py-3' />
                    <MdOutlineEmail className='absolute text-4xl top-[35%]' />
                </div>
                <input type="text" className='border-2 px-8 py-3' placeholder='Message' />
                <button type='submit' className='border'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact