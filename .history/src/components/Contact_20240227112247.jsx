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
                <div className='realtive border-4 border-[#6C63FF] rounded-2xl'>
                    <input type="text" placeholder='Name' className='pl-14 pr-20 py-3 outline-none' />
                    <IoPersonOutline className='absolute top-[2%] text-5xl pl-3' />
                </div>
                <div className='realtive border-4 rounded-2xl border-[#6C63FF]'>
                    <input type="email" placeholder='Email' className='pl-14 pr-20 py-3 outline-none' />
                    <MdOutlineEmail className='absolute text-5xl top-[32%] pl-3' />
                </div>
                <div className='border-4 rounded-2xl border-[#6C63FF]'>
                    <input type="text" className='pl-14 pr-20 py-3 outline-none' placeholder='Message' />
                    <LuMessagesSquare className='absolute text-5xl top-[62%] pl-3 '  />
                </div>
                <button type='submit' className='border-2 border-[#6C63FF] bg-[#6C63FF] px-28 py-3'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact