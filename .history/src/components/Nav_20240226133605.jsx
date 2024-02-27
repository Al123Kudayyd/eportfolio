import React from 'react'

function Nav() {
  return (
    <div className=' border-y-2 border-black '>
        <div className='flex justify-between'>
            <h1 className='font-bold py-10 pl-20 text-7xl border-r-4 pr-14 border-black bg-gradient-to-r from-orange-300 via-purple-400 to-blue-300'>BLYNK</h1>
            <ul className='italic flex justify-center items-center space-x-10 cursor-pointer mx-5'>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li className='bg-black text-white px-5 py-2 border-'>WORK WITH US</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav