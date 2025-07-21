import React from 'react'

const Skills = () => (
  <section
    id='skills'
    className='py-16 md:py-24 lg:py-32 px-4 md:px-10 lg:px-20 bg-[#1a1a1a]'
  >
    <div className='max-w-6xl mx-auto'>
      <h2 className='text-sm font-semibold text-purple-400 uppercase tracking-wider text-center mb-8'>
        My Skills
      </h2>
      <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
        {[
          'React',
          'JavaScript',
          'Tailwind CSS',
          'Node.js',
          'Python',
          'UX/UI Design',
          'API Development',
          'Databases',
          'Cloud Platforms',
          'Git',
          'Problem Solving',
          'Communication'
        ].map((skill, index) => (
          <span
            key={index}
            className='bg-gray-700 text-gray-200 px-5 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-600 transition duration-300'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default Skills 