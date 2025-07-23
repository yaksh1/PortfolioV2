import React from 'react'
import { Menu } from 'lucide-react';

const Header = () => (
  <header className='flex justify-between items-center p-6 md:p-8 lg:p-10 z-20 relative'>
    <div className='text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-widest font-mono drop-shadow-[0_2px_8px_rgba(168,139,250,0.4)]'>
      //YG
    </div>
    <nav className='hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6 text-sm text-gray-200 font-medium'>
      <a href='#about' className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-purple-400 before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100 hover:drop-shadow-[0_0_5px_rgba(168,139,250,0.8)]'>About</a>
      <a href='#skills' className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-purple-400 before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100 hover:drop-shadow-[0_0_5px_rgba(168,139,250,0.8)]'>Skills</a>
      <a href='#portfolio' className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-purple-400 before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100 hover:drop-shadow-[0_0_5px_rgba(168,139,250,0.8)]'>Portfolio</a>
      <a href='#contact' className='relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-purple-400 before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100 hover:drop-shadow-[0_0_5px_rgba(168,139,250,0.8)]'>Contact</a>
    </nav>
    <div className='md:hidden flex items-center space-x-4'>
      <div className='w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm'>
        <Menu className='h-5 w-5' />
      </div>
    </div>
  </header>
)

export default Header 