import React from 'react'

function Nav() {
  return (
    <div className=' border-y-2 border-black '>
        <div className='flex justify-between'>
            <h1 className='font-bold py-10 pl-20 text-4xl border-r-4 pr-14 border-black bg-gradient-to-r from-orange-300 via-purple-500 to-blue-400'>BLYNK</h1>
            <ul className='italic flex justify-center items-center space-x-10 cursor-pointer m'>
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