import React from 'react';
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';
import ProjectDetails from './ProjectDetails';
import '../blocks/Components/TiltedCard/TiltedCard.css';
import './ProjectDetails.css';

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
      <div className='flex flex-col gap-16'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center md:items-stretch gap-8`}
          >
            <div className='flex-shrink-0 flex justify-center items-center w-full md:w-1/2'>
              <TiltedCard
                imageSrc={project.imageUrl}
                title={project.title}
                overlayContent={null}
                containerHeight='300px'
                containerWidth='100%'
                imageHeight='300px'
                imageWidth='100%'
              />
            </div>
            <div className='w-full md:w-1/2 flex items-center'>
              <ProjectDetails project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;