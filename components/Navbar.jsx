import React, {useState} from 'react'
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
   

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>GlowAI</h1>
        <ul className="hidden md:flex">
            <li className='p-4 font-bold cursor-pointer'>Home</li>
            <li className='p-4 font-bold cursor-pointer'>About</li>
            <li className='p-4 font-bold cursor-pointer'>Contact</li>
        </ul>       
    </div>
  )
}

export default Navbar