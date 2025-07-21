import React from 'react'
import ProfileCard from './ProfileCard'

const About = () => (
  <section
    id='about'
    className='py-16 md:py-24 lg:py-32 px-4 md:px-10 lg:px-20 bg-[#1a1a1a]'
  >
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12'>
      <div className='md:w-1/2 mb-8 md:mb-0'>
        <h2 className='text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4'>
          About Me
        </h2>
        <p className='text-3xl md:text-4xl font-bold leading-snug mb-6'>
          Turning ideas into{' '}
          <span className='text-green-400'>interactive realities</span> with
          a focus on user-centric design.
        </p>
        <p className='text-gray-300 text-lg leading-relaxed'>
          I'm Yaksh Gandhi, a passionate software engineer with expertise in building dynamic and
          responsive web applications. My journey in development is driven
          by a desire to create intuitive and visually appealing digital
          products that solve real-world problems. I thrive in environments
          where creativity meets technology, and I'm always eager to learn
          new tools and techniques to push the boundaries of what's
          possible.
        </p>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <ProfileCard
          avatarUrl='https://placehold.co/128x128/2b2b2b/FFFFFF?text=YG'
          name='Yaksh Gandhi'
          title='Software Engineer'
          handle='@yakksh.dev'
          status='Open to opportunities'
          contactText='Contact Me'
          showUserInfo={true}
          enableTilt={true}
          behindGradient='linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)'
          innerGradient='radial-gradient(circle at 60% 40%, #fbbf24 0%, #f472b6 100%)'
        />
      </div>
    </div>
  </section>
)

export default About 