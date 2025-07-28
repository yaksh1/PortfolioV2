import React from 'react'

const Contact = () => (
  <section
    id='contact'
    className='py-24 md:py-32 lg:py-40 px-4 text-center bg-[#1a1a1a]'
  >
    <h2 className='text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8'>
      Let's Build Something <span className='text-yellow-400'>Amazing</span> Together
    </h2>
    <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 mb-8'>
      Have a project in mind or just want to chat? Feel free to reach out!
    </p>
    <a
      href='https://mail.google.com/mail/?view=cm&fs=1&to=yakksh.dev@gmail.com'
      className='px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition duration-300'
    >
      Email: yakksh.dev@gmail.com
    </a>
    <div className='mt-8 text-gray-400 text-sm'>
      <p>Connect with me on:</p>
      <div className='flex justify-center space-x-4 mt-2'>
        <a href='https://github.com/yaksh1' className='hover:text-white transition duration-300' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='https://linkedin.com/in/yakshgandhi' className='hover:text-white transition duration-300' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a href='https://instagram.com/yakksh.dev' className='hover:text-white transition duration-300' target='_blank' rel='noopener noreferrer'>Instagram</a>
      </div>
    </div>
  </section>
)

export default Contact 