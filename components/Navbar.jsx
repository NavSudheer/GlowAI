import React, {useState} from 'react'
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
   

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>GlowAI</h1>
        <ul className="hidden md:flex">
            <li className='p-4 font-bold cursor-pointer'>Home</li>
            <li className='p-4 font-bold cursor-pointer'>Company</li>
            <li className='p-4 font-bold cursor-pointer'>Resources</li>
            <li className='p-4 font-bold cursor-pointer'>About</li>
            <li className='p-4 font-bold cursor-pointer'>Contact</li>
        </ul>
        {/* <div onClick={handleNav} className='cursor-pointer block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div> */}
        <div className={ 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>STOCKS.</h1>
            <ul className="uppercase p-4">
                <li className='p-4 border-b border-gray-600 font-bold'>Home</li>
                <li className='p-4 border-b border-gray-600 font-bold'>Company</li>
                <li className='p-4 border-b border-gray-600 font-bold'>Resources</li>
                <li className='p-4 border-b border-gray-600 font-bold'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar