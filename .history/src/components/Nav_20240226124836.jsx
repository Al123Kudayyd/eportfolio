import React from 'react'

function Nav() {
  return (
    <div className='mt-10 px-10'>
        <div className='flex justify-between'>
            <h1 className='font-bold text-4xl border-r-4 border-sepe'>BLYNK</h1>
            <ul className='italic flex justify-center items-center space-x-10'>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>WORK WITH US</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav