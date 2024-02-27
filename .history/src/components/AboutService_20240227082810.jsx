import React from 'react'


function AboutService({ button, button1, button2, para }) {
  return (
    <div className='p-20'>
        <div className='lg:flex flex flex-col justify-center items-center space-y-10'>
            <div className='flex flex-col items-center text-gray-400 '>
                <span className='text-5xl'>{button}</span>
                <p className='text-lg'>{para}</p>
            </div>
            <div className='flex flex-col items-center text-gray-400 '>
                <span className='text-5xl'>{button1}</span>
                <p className='text-lg'>{para}</p>
            </div>
            <div className='flex flex-col items-center text-gray-400 '>
                <span className='text-5xl '>{button2}</span>
                <p className='text-lg'>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutService