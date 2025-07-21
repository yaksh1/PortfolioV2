import React from 'react'

const Footer = () => (
  <footer className='py-10 text-center text-gray-500 text-sm'>
    <p>&copy; {new Date().getFullYear()} Yaksh Gandhi. All rights reserved.</p>
    <p className='mt-2'>
      Designed with <span className='text-red-500'>&hearts;</span> and built with React
    </p>
  </footer>
)

export default Footer 