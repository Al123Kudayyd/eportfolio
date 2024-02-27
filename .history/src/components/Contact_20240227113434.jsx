import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import contact from '../assests/contact.png'


function Contact() {
  return (
    <div className='my-[800px]'>
        <h1 className='text-5xl py-5'>Contact us</h1>
        <div className='h-1 flex justify-center m-auto w-14 bg-[#6C63FF] text-center'></div>
        <div className='my-10 flex justify-center items-center'>
            <form className='flex flex-col items-center relative text-2xl space-y-5 text-white '>
                <div className='realtive border-4 border-[#6C63FF] rounded-2xl'>
                    <input type="text" placeholder='Name' className='pl-14 pr-20 py-3 outline-none bg-[#6C63FF] placeholder:text-white' />
                    <IoPersonOutline className='absolute top-[2%] text-5xl pl-3' />
                </div>
                <div className='realtive border-4 rounded-2xl border-[#6C63FF]'>
                    <input type="email" placeholder='Email' className='pl-14 pr-20 py-3 outline-none bg-[#6C63FF] placeholder:text-white' />
                    <MdOutlineEmail className='absolute text-5xl top-[30%] pl-3' />
                </div>
                <div className='border-4 rounded-2xl border-[#6C63FF]'>
                    <input type="text" className='pl-14 pr-20 py-3 outline-none bg-[#6C63FF] placeholder:text-white' placeholder='Message' />
                    <LuMessagesSquare className='absolute text-5xl top-[56%] pl-3 '  />
                </div>
                <button type='submit' className='border-2 border-[#6C63FF] bg-[#6C63FF] px-28 py-3 rounded-full 
                hover:bg-white hover:text-[#6C63FF] transition-all duration-300'>Send Message</button>
            </form>
            <div>
                <img src={contact} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact