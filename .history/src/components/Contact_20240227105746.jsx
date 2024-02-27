import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className='my-24'>
        <h1 className='text-5xl py-5'>Contact us</h1>
        <div className='h-1 flex justify-center m-auto w-14 bg-[#6C63FF] text-center'></div>
        <div>
            <div>
                <div>
                    <input type="text" placeholder='Name' />
                    <IoPersonOutline />
                </div>
                <div>
                    <input ty placeholder='Email' />
                    <MdOutlineEmail />
                </div>
                <input type="text" placeholder='Message' />
            </div>
        </div>
    </div>
  )
}

export default Contact