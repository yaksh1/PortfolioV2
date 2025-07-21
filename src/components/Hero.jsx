import React from 'react'

const Hero = () => (
  <section className='relative flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 px-4 text-center'>
    <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4'>
      Hi, I'm <span className='text-yellow-400'>Yaksh Gandhi</span>
      <br />A Creative{' '}
      <span className='relative inline-block'>
        Software Engineer
        <span className='absolute bottom-1 left-0 right-0 h-2 bg-purple-400 opacity-70 rounded-full z-0'></span>
      </span>
    </h1>
    <p className='text-lg md:text-xl text-gray-300 max-w-2xl mt-4'>
      Crafting engaging and immersive digital experiences with a passion for
      innovation and design.
    </p>
    <div className='mt-8 flex space-x-4'>
      <a
        href='#portfolio'
        className='px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300'
      >
        View My Work
      </a>
      <a
        href='#contact'
        className='px-6 py-3 border border-gray-600 text-gray-400 rounded-full font-semibold hover:text-white hover:border-white transition duration-300'
      >
        Get in Touch
      </a>
    </div>
  </section>
)

export default Hero 