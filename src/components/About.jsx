import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProfileCard from './ProfileCard'
import profilePic from '../assets/profile.jpeg';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  return (
    <section
      id='about'
      className='py-16 md:py-24 lg:py-32 px-4 md:px-10 lg:px-20 bg-[#1a1a1a]'
    >
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12'>
        <div className='md:w-1/2 mb-8 md:mb-0' ref={ref}>
          <motion.h2
            className='text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4'
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            About Me
          </motion.h2>
          <motion.p
            className='text-3xl md:text-4xl font-bold leading-snug mb-6'
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            Turning ideas into{' '}
            <span className='text-green-400'>interactive realities</span> with
            a focus on user-centric design.
          </motion.p>
          <motion.p
            className='text-gray-300 text-lg leading-relaxed'
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            I'm Yaksh Gandhi, a passionate software engineer with expertise in building dynamic and
            responsive web applications. My journey in development is driven
            by a desire to create intuitive and visually appealing digital
            products that solve real-world problems. I thrive in environments
            where creativity meets technology, and I'm always eager to learn
            new tools and techniques to push the boundaries of what's
            possible.
          </motion.p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <ProfileCard
            avatarUrl={profilePic}
            name='Yaksh Gandhi'
            title='Software Engineer'
            status='Open to opportunities'
            // showUserInfo={true}
            enableTilt={true}
            behindGradient='linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)'
            innerGradient='radial-gradient(circle at 60% 40%, #fbbf24 0%, #f472b6 100%)'
          />
        </div>
      </div>
    </section>
  )
}

export default About 