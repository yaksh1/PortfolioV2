import React from 'react'

const PortfolioCard = ({ project }) => (
  <a
    href={project.link}
    className='block bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'
  >
    <img
      src={project.imageUrl}
      alt={project.title}
      className='w-full h-48 object-cover'
      onError={e => {
        e.target.onerror = null
        e.target.src =
          'https://placehold.co/600x400/555555/FFFFFF?text=Image+Not+Found'
      }}
    />
    <div className='p-4'>
      <h3 className='text-lg font-semibold text-gray-200 mb-2'>
        {project.title}
      </h3>
      <p className='text-sm text-gray-400 mb-3'>{project.description}</p>
      <div className='flex flex-wrap gap-2'>
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className='bg-purple-700 text-white text-xs px-2 py-1 rounded-full'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
)

export default PortfolioCard 