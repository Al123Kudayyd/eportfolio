import React from 'react'

function Nav() {
  return (
    <div className=' border-y-2 border-black sticky top-0 z-10'>
        <div className='flex justify-between'>
            <h1 className='font-bold py-10 pl-16 lg:text-6xl text-4xl border-r-4 pr-12 border-black bg-gradient-to-r from-orange-300 via-purple-400 to-blue-300'>YOURS</h1>
            <ul className='italic hidden lg:flex justify-center items-center space-x-10 cursor-pointer mx-5 text-md font-semibold transp'>
                <li className='hover:text-gray-500 transition-all duration-300 '>Home</li>
                <li className='hover:text-gray-500 transition-all duration-300'>Services</li>
                <li className='hover:text-gray-500 transition-all duration-300'>About</li>
                <li className='hover:text-gray-500 transition-all duration-300'>Contact</li>
                <li className='bg-black text-white px-6 py-[10px] border-2 border-black hover:bg-white rounded-3xl 
                hover:text-black transition-all duration-300'>
                    WORK WITH ME
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav