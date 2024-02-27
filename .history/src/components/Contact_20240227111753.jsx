import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";


function Contact() {
  return (
    <div className='my-24'>
        <h1 className='text-5xl py-5'>Contact us</h1>
        <div className='h-1 flex justify-center m-auto w-14 bg-[#6C63FF] text-center'></div>
        <div className='my-10'>
            <form className='flex flex-col items-center relative text-2xl space-y-5'>
                <div className='realtive border-2 rounded-2xl'>
                    <input type="text" placeholder='Name' className='pl-14 pr-20 py-3' />
                    <IoPersonOutline className='absolute top-[0%] text-5xl pl-3' />
                </div>
                <div className='realtive border-2 rounded-2xl'>
                    <input type="email" placeholder='Email' className='pl-14 pr-20 py-3' />
                    <MdOutlineEmail className='absolute text-5xl top-[31%] pl-3' />
                </div>
                <div className='border-2 rounded-2xl '>
                    <input type="text" className='pl-14 pr-20 py-3' placeholder='Message' />
                    <LuMessagesSquare className='absolute text-5xl top-[62%] pl-3' />
                </div>
                <button type='submit' className='border'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact