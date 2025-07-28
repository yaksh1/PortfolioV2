import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ShareButton = ({ links, children, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`relative min-w-40 rounded-3xl bg-yellow-400 text-black font-bold text-base px-6 py-2 shadow-md border border-black/10 transition-all duration-300 flex items-center justify-center ${isHovered ? 'opacity-0' : 'opacity-100'} ${className}`}
        {...props}
      >
        <span className="flex items-center justify-center w-full h-full gap-2">{children}</span>
      </button>
      <div className="absolute left-0 top-0 flex h-10">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              key={index}
              className={`h-10 w-10 flex items-center justify-center bg-black text-white transition-all duration-300 ${
                index === 0 ? 'rounded-l-3xl' : ''
              } ${
                index === links.length - 1 ? 'rounded-r-3xl' : ''
              } border-r border-white/10 last:border-r-0 hover:bg-gray-900 ${
                isHovered
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              } ${
                index === 0
                  ? 'transition-all duration-200'
                  : index === 1
                  ? 'delay-[50ms] transition-all duration-200'
                  : index === 2
                  ? 'transition-all delay-100 duration-200'
                  : index === 3
                  ? 'transition-all delay-150 duration-200'
                  : ''
              }`}
              style={{ zIndex: 10 - index }}
            >
              <Icon className="size-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

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
      <div className='hidden md:flex items-center space-x-4'>
        <ShareButton
          links={[
            {
              icon: FaEnvelope,
              href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yakksh.dev@gmail.com',
            },
            {
              icon: FaGithub,
              href: 'https://github.com/yaksh1',
            },
            {
              icon: FaLinkedin,
              href: 'https://linkedin.com/in/yakshgandhi',
            },
            {
              icon: FaWhatsapp,
              href: 'https://wa.me/919999999999',
            },
          ]}
        >
          Get in Touch
        </ShareButton>
      </div>
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