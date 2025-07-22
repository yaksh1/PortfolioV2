import React from 'react'
import ProjectDashboard from './ProjectDashboard'

const Hero = () => (
  <section className="relative flex flex-col md:flex-row items-start justify-center min-h-screen px-0 md:px-0 py-24 bg-[#1a1a1a] overflow-hidden">
    {/* Silk background effect - removed */}
    <div className="relative z-10 flex flex-col md:flex-row items-start justify-center">
      <div className="max-w-3xl flex flex-col items-start space-y-4 pl-4 md:pl-12 flex-1 min-w-0">
        <h1 className="text-5xl md:text-5xl font-extrabold text-white leading-tight text-left tracking-wide" style={{ fontFamily: 'DM Serif Text, serif', letterSpacing: '0.04em' }}>
          <span>Hi, I'm <span className="text-yellow-400">Yaksh Gandhi</span></span><br/>
          <span>A Creative</span><br/>
          <em className="italic">Software Engineer</em>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-sans text-left max-w-xl">
          Crafting engaging and immersive digital experiences with a passion for innovation and design.
        </p>
        <div className="mt-8 flex flex-row items-center gap-6">
          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white bg-transparent text-white shadow-none transition-all duration-200 hover:scale-105 focus:scale-105 hover:shadow-[0_0_0_8px_rgba(168,85,247,0.18)] focus:shadow-[0_0_0_8px_rgba(168,85,247,0.18)] outline-none relative"
            style={{ boxShadow: 'none' }}
            aria-label="View Projects"
          >
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-opacity duration-200">
              <path d="M10.5858 14.8284H14.8284M14.8284 14.8284V10.5858M14.8284 14.8284L9.17157 9.17158" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-gray-300 text-xl font-light tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
            VIEW PROJECTS
          </span>
        </div>
      </div>
      {/* Project Dashboard on the right, more rectangular and higher up */}
      <div className="flex-1 flex justify-center items-start w-full md:w-auto mt-[-100px] md:mt-[-100px] max-w-2xl overflow-hidden min-w-0 mr-10">
        <div className="scale-90 flex items-center justify-center">
          <ProjectDashboard />
        </div>
        {/* <MusicPlayer /> */}
      </div>
    </div>
  </section>
)

export default Hero
