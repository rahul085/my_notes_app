import React from 'react'
import logo from '../../assets/note.webp';

const Navbar = () => {
  return (
    <header className='flex px-5 py-1 gap-3 border-b border-gray-300'>
        <div className='w-12 h-12'>
            <img  className='w-full h-full' src={logo} alt='my_logo'/>
        </div>
        <h1 className='text-indigo-800 text-4xl font-bold'>BrainDoc</h1>
    </header>
  )
}

export default Navbar