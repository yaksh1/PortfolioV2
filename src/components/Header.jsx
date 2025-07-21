import React from 'react'

const Header = () => (
  <header className='flex justify-between items-center p-6 md:p-8 lg:p-10 z-20 relative'>
    <div className='text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-widest font-mono drop-shadow-[0_2px_8px_rgba(168,139,250,0.4)]'>
      //YG
    </div>
    <nav className='hidden md:flex space-x-6 text-sm text-gray-400'>
      <a href='#about' className='hover:text-white'>About</a>
      <a href='#skills' className='hover:text-white'>Skills</a>
      <a href='#portfolio' className='hover:text-white'>Portfolio</a>
      <a href='#contact' className='hover:text-white'>Contact</a>
    </nav>
    <div className='flex items-center space-x-4'>
      <div className='w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
    </div>
  </header>
)

export default Header 