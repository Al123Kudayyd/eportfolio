import React from 'react'


function AboutService({ button, button1, button2, para }) {
  return (
    <div>
        <div>
            <div className='flex flex-col items-center'>
                <span>{button}</span>
                <p>{para}</p>
            </div>
            <div className='flex flex-col items-center'>
                <span>{button1}</span>
                <p>{para}</p>
            </div>
            <div>
                <span>{button2}</span>
                <p>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutService