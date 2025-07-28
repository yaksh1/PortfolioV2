import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  return (
    <section
      id='contact'
      className='py-24 md:py-32 lg:py-40 px-4 text-center bg-[#1a1a1a]'
    >
      <div ref={ref}>
        <motion.h2
          className='text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8'
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Let's Build Something <span className='text-yellow-400'>Amazing</span> Together
        </motion.h2>
        <motion.p
          className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 mb-8'
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          Have a project in mind or just want to chat? Feel free to reach out!
        </motion.p>
        <motion.p
          className='text-gray-400 text-sm max-w-2xl mx-auto mt-4 mb-8'
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          Connect with me on:
      </motion.p>
      </div>
       <motion.p
          className='text-gray-400 text-sm max-w-2xl mx-auto mt-4 mb-8'
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
        >
      <a
        href='https://mail.google.com/mail/?view=cm&fs=1&to=yakksh.dev@gmail.com'
        className='px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition duration-300'
        >
        Email: yakksh.dev@gmail.com
        </a>
      </motion.p>
       <motion.p
          className='text-gray-400 text-sm max-w-2xl mx-auto mt-4 mb-8'
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.60, ease: 'easeOut' }}
        >
      <div className='mt-8 text-gray-400 text-sm'>
        <div className='flex justify-center space-x-4 mt-2'>
          <a href='https://github.com/yaksh1' className='hover:text-white transition duration-300' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://linkedin.com/in/yakshgandhi' className='hover:text-white transition duration-300' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <a href='https://instagram.com/yakksh.dev' className='hover:text-white transition duration-300' target='_blank' rel='noopener noreferrer'>Instagram</a>
        </div>
        </div>
      </motion.p>
    </section>
  )
}

export default Contact 