import React from 'react'
import about from '../assests/about.png'

function About() {
  return (
    <div className='relative border-2 border-[#6C63FF] m-7 max-w-[1400px]'>
      <div>
        <div className='relative '>
            <h1 className='text-left absolute  text-[#6C63FF] py-10 left-[10%]  text-5xl font-bold'>
                About Us
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptatem modi dolore sunt praesentium aut deleniti quia suscipit laboriosam iure reiciendis architecto expedita tempore ipsam officiis, doloremque at repellendus ducimus.</p>    
        
        </div>
        </div>
        <img src={about} className='absolute top-0 w-[30%] shadow-2xl right-16' />
    </div>
  )
}

export default About