import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = ({ projects }) => (
  <section
    id='portfolio'
    className='py-16 md:py-24 lg:py-32 px-4 md:px-10 lg:px-20 bg-[#1a1a1a]'
  >
    <div className='max-w-6xl mx-auto'>
      <h2 className='text-sm font-semibold text-purple-400 uppercase tracking-wider mb-8 text-center'>
        My Portfolio
      </h2>
      <p className='text-3xl md:text-4xl font-bold leading-snug text-center mb-12'>
        Showcasing my best <span className='text-yellow-400'>projects</span>{' '}
        and <span className='text-green-400'>creations</span>.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <a
          href='#'
          className='px-6 py-3 border border-gray-600 text-gray-400 rounded-full font-semibold hover:text-white hover:border-white transition duration-300'
        >
          View All Projects
        </a>
      </div>
    </div>
  </section>
)

export default Portfolio 