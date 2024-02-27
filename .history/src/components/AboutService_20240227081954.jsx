import React from 'react'


function AboutService({ button, button1, button2, para }) {
  return (
    <div>
        <div className='flex justify-center py-30'>
            <div className='flex flex-col items-center'>
                <span className='text-5xl text-gray-400'>{button}</span>
                <p>{para}</p>
            </div>
            <div className='flex flex-col items-center'>
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