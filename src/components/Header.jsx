import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '50%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, x: '50%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
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
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm z-30'>
          {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={menuVariants}
            className='md:hidden absolute top-0 right-0 h-screen w-3/4 bg-gray-900/80 backdrop-blur-lg p-6 z-20'
          >
            <div className='flex flex-col items-center justify-center h-full space-y-8 text-xl text-gray-200 font-medium'>
              <a href='#about' onClick={toggleMenu} className='hover:text-white transition-colors duration-300'>About</a>
              <a href='#skills' onClick={toggleMenu} className='hover:text-white transition-colors duration-300'>Skills</a>
              <a href='#portfolio' onClick={toggleMenu} className='hover:text-white transition-colors duration-300'>Portfolio</a>
              <a href='#contact' onClick={toggleMenu} className='hover:text-white transition-colors duration-300'>Contact</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 