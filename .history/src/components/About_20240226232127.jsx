import React from 'react'
import about from '../assests/about.png'

function About() {
  return (
    <div className='relative '>
      <div>
        <div className='relative border-2 border-[#6C63FF] m-7 max-w-[1400px]'>
            <h1 className='text-left absolute  text-[#6C63FF] left-[5%] pt-5 text-5xl font-bold'>
                About Us
            </h1>
            <p className='w-1/4 mt-20 text-lg p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptatem modi dolore sunt praesentium aut deleniti quia suscipit laboriosam iure reiciendis architecto expedita tempore ipsam officiis, doloremque at repellendus ducimus.</p>    
        
        </div>
        </div>
        <img src={about} className='absolute -top-16 w-[30%] shadow-2xl right-16' />
    </div>
  )
}

export default About