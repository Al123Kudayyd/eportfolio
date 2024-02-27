import React from 'react'


function AboutService({ button, button1, button2, para }) {
  return (
    <div className='py-20'>
        <div className='flex justify-center '>
            <div className='flex flex-col items-center text-gray-400'>
                <span className='text-5xl'>{button}</span>
                <p>{para}</p>
            </div>
            <div className='flex flex-col items-center text-gray-400'>
                <span className='text-5xl'>{button1}</span>
                <p>{para}</p>
            </div>
            <div className='flex flex-col items-center text-gray-400'>
                <span className='text-5xl '>{button2}</span>
                <p>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutService