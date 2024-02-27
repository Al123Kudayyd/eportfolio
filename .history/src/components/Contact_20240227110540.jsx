import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className='my-24'>
        <h1 className='text-5xl py-5'>Contact us</h1>
        <div className='h-1 flex justify-center m-auto w-14 bg-[#6C63FF] text-center'></div>
        <div>
            <form className='flex flex-col items-center relative text-2xl'>
                <div className='realtive'>
                    <input type="text" placeholder='Name' className='px-10' />
                    <IoPersonOutline className='absolute top-[2%]' />
                </div>
                <div>
                    <input type="email" placeholder='Email' className='px-10' />
                    <MdOutlineEmail className='absolute top-[2%]' />
                </div>
                <input type="text" placeholder='Message' />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact