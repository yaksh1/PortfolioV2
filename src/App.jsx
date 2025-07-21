import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AuroraCursor from './components/AuroraCursor'

// Dummy data for portfolio projects
const portfolioProjects = [
  {
    title: 'E-commerce Platform Redesign',
    description:
      'Led the redesign of a large-scale e-commerce platform, focusing on user experience and conversion optimization.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl:
      'https://placehold.co/600x400/333333/FFFFFF?text=E-commerce+Redesign',
    link: '#'
  },
  {
    title: 'Mobile Game Development',
    description:
      'Developed a cross-platform mobile game with engaging mechanics and a vibrant art style.',
    technologies: ['React Native', 'Firebase', 'Unity (concept)'],
    imageUrl: 'https://placehold.co/600x400/444444/FFFFFF?text=Mobile+Game',
    link: '#'
  },
  {
    title: 'Data Visualization Dashboard',
    description:
      'Built an interactive dashboard to visualize complex datasets for business intelligence.',
    technologies: ['D3.js', 'React', 'Python (Flask)'],
    imageUrl:
      'https://placehold.co/600x400/555555/FFFFFF?text=Data+Viz+Dashboard',
    link: '#'
  },
  {
    title: 'AI Chatbot Integration',
    description:
      'Integrated a custom AI chatbot into a customer service portal, improving response times and user satisfaction.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    imageUrl: 'https://placehold.co/600x400/666666/FFFFFF?text=AI+Chatbot',
    link: '#'
  },
  {
    title: 'Personal Blog & CMS',
    description:
      'Designed and developed a personal blog with a custom content management system.',
    technologies: ['Next.js', 'GraphQL', 'Strapi', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/600x400/777777/FFFFFF?text=Personal+Blog',
    link: '#'
  },
  {
    title: 'Smart Home Automation App',
    description:
      'Created a mobile application for controlling smart home devices and managing schedules.',
    technologies: ['Flutter', 'AWS IoT', 'Python'],
    imageUrl: 'https://placehold.co/600x400/888888/FFFFFF?text=Smart+Home+App',
    link: '#'
  }
]

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = event => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='min-h-screen bg-[#1a1a1a] text-white font-inter relative overflow-hidden'>
      <AuroraCursor mouseX={mousePosition.x} mouseY={mousePosition.y} />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio projects={portfolioProjects} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
