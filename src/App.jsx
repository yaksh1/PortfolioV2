import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AuroraCursor from './components/AuroraCursor'
import promoImg from './assets/promo.png'
import trainImg from './assets/train2.png'
import feedbackImg from './assets/feedback.jpg'
import aiImg from './assets/ai_agent.jpg'
import reclaimifyImg from './assets/reclaimify.png'
import githubImg from './assets/github_dashboard.png'

// Dummy data for portfolio projects
const portfolioProjects = [
  {
    title: 'Research Assistant Extension',
    description:
      'Created a chrome extension to summarize selected content using AI and save them with citations.',
    technologies: ['Javascript', 'HTML', 'CSS','Java','Springboot','Gemini API'],
    imageUrl: promoImg,
    link: 'https://yaksh1.github.io/Research-Assistant-Extension/'
  },
  {
    title: 'Train ticket booking microservice',
    description:
      'A robust, scalable train ticket booking system built using microservices architecture. This system allows users to book train tickets, manage train schedules, and handle user accounts through a set of interconnected microservices.',
    technologies: ['Java', 'Springboot','docker','MongoDB','Eureka','Git'],
    imageUrl: trainImg,
    link: 'https://github.com/yaksh1/train-ticket-config-server'
  },
  {
    title: 'Faculty Feedback',
    description:
      'A web application for faculty feedback using Spring Boot, MongoDB and MySQL',
    technologies: ['Springboot', 'MongoDB', 'MySQL','JWT','Perspective API','BCrypt'],
    imageUrl:
      feedbackImg,
    link: 'https://github.com/yaksh1/faculty-feedback'
  },
  {
    title: 'AI Agent - Researcha and email drafting',
    description:
      'A multi-agent system that automates the process of researching a topic and then drafting an email based on the findings.',
    technologies: ['Python', 'PydanticAI', 'Google Search API', 'Gmail API'],
    imageUrl: aiImg,
    link: 'https://github.com/yaksh1/Ai-agent'
  },
  {
    title: 'Reclaimify',
    description:
      'A Flutter-based Lost and Found app designed to streamline the process of returning lost items to their rightful owners. This repository contains the source code and essential information for developers looking to explore or contribute to the project.',
    technologies: ['Flutter', 'Bloc', 'Firebase', 'Dart', 'Git'],
    imageUrl: reclaimifyImg,
    link: 'https://github.com/yaksh1/reclaimify'
  },
  {
    title: 'Github - Dashboard',
    description:
      'This project is a web-based dashboard that provides a high-level overview of any public GitHub repository. It is designed to help developers quickly assess the health and activity of a project, identify trends, and find opportunities to contribute.',
    technologies: ['React','Vite','Tailwind CSS','Git','Github API','Chart.js'],
    imageUrl: githubImg
,
    link: 'https://github.com/yaksh1/dashboard-github'
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
