import React from 'react'


function AboutService({ button, button1, button2, para }) {
  return (
    <div className='p-20'>
        <div className='md:flex flex flex-col justify-center items-center lg:space-x-10 space-y-10 '>
            <div className='flex flex-col items-   '>
                <span className='text-5xl text-[#6C63FF]'>{button}</span>
                <p className='text-lg text-gray-400 '>{para}</p>
            </div>
            <div className='flex flex-col items-   '>
                <span className='text-5xl text-[#6C63FF]'>{button1}</span>
                <p className='text-lg text-gray-400  '>{para}</p>
            </div>
            <div className='flex flex-col items-   '>
                <span className='text-5xl text-[#6C63FF]'>{button2}</span>
                <p className='text-lg text-gray-400 '>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutService