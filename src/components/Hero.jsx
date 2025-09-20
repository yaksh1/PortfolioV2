import React from 'react'
import { motion } from 'framer-motion'


import promo from '../assets/featured.png';

const headingLines = [
    <>Hi, I'm <span className="text-yellow-400">Yaksh Gandhi</span></>,
    'A Creative',
    <em className="italic">Software Engineer</em>
];

const Hero = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-start justify-center min-h-screen px-4 md:px-8 pt-8 pb-24 bg-[#1a1a1a] overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
                
                {/* Left Side: Text Content */}
                <div className="flex flex-col items-start justify-center text-left space-y-4">
                    <h1 className="text-5xl md:text-5xl font-extrabold text-white leading-tight text-left tracking-wide" style={{ fontFamily: 'DM Serif Text, serif', letterSpacing: '0.04em' }}>
                        {headingLines.map((line, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 60, filter: 'blur(16px)', opacity: 0 }}
                                animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
                                transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.4, 0.2, 0.2, 1] }}
                                style={{ display: 'block' }}
                            >
                                {line}<br />
                            </motion.div>
                        ))}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-sans text-left max-w-xl">
                        Crafting engaging and immersive digital experiences with a passion for innovation and design.
                    </p>
                    <div className="mt-8 flex flex-row items-center gap-6">
                        <a
                            href="#portfolio"
                            className="group inline-flex items-center gap-6"
                            aria-label="View Projects"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white bg-transparent text-white shadow-none transition-all duration-200 group-hover:scale-105 group-focus:scale-105 group-hover:shadow-[0_0_0_8px_rgba(168,85,247,0.18)] group-focus:shadow-[0_0_0_8px_rgba(168,85,247,0.18)] outline-none relative">
                                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-opacity duration-200">
                                    <path d="M10.5858 14.8284H14.8284M14.8284 14.8284V10.5858M14.8284 14.8284L9.17157 9.17158" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-gray-300 text-xl font-light tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
                                VIEW PROJECTS
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Floating Showcase Card */}
                <div className="flex justify-center items-center">
                    <div className="w-full max-w-sm rounded-2xl p-6 bg-gray-800/60 backdrop-blur-xl border border-white/10 glow-card floating-cloud">
                        
                        {/* Header with Image */}
                        <div className="mb-5">
                            <img src={promo} alt="Kortex Chrome Extension Featured" className="rounded-lg w-full"/>
                        </div>
                        
                        {/* Content */}
                        <h2 className="text-2xl font-bold text-white mb-2">Proudly Featured by Google</h2>
                        <p className="text-gray-400 mb-6">
                            Kortex is officially recognized on the Chrome Web Store for its quality and user experience.
                        </p>

                        {/* "As Seen On" Section */}
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">As Seen On</h3>
                            <div className="flex items-center space-x-4">
                               <div className="flex items-center space-x-2 bg-gray-700/50 px-3 py-1.5 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-300">Chrome Web Store</span>
                               </div>
                               <div className="flex items-center space-x-2 bg-gray-700/50 px-3 py-1.5 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-300">XDA Developers</span>
                               </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="https://chromewebstore.google.com/detail/kortex/hdapplggdhndkblofffknpmnnnnbncbn" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-5 rounded-lg shadow-md border border-black/10 transition-all duration-300">
                                Add to Chrome
                            </a>
                            <a href="https://www.xda-developers.com/kortex-notebooklm-chrome-extension/" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-5 rounded-lg transition-colors">
                                Read the Blog
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero

