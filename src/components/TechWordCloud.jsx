import React from 'react'
import { motion } from 'framer-motion'

const techWords = [
  'JavaScript', 'React', 'TypeScript', 'Figma', 'UX', 'APIs', 'Design Systems', 'Node.js', 'CSS', 'HTML', 'Tailwind', 'Framer Motion', 'Next.js', 'Git', 'Python', 'UI', 'WebGL', 'Three.js', 'Vite', 'Redux', 'Sass'
]

// Neon/gradient color palette
const gradients = [
  'from-purple-400 to-pink-500',
  'from-blue-400 to-purple-500',
  'from-yellow-400 to-pink-400',
  'from-green-400 to-blue-500',
  'from-pink-400 to-yellow-400',
  'from-cyan-400 to-blue-500',
]

function getRandomGradient() {
  return gradients[Math.floor(Math.random() * gradients.length)]
}

const wordVariants = {
  initial: (i) => ({
    y: 0,
    scale: 1,
    opacity: 0,
    filter: 'blur(2px)',
    transition: { delay: i * 0.08, duration: 0.6, type: 'spring' }
  }),
  animate: (i) => ({
    y: [0, -8, 0, 8, 0],
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.08,
      duration: 3 + Math.random(),
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }
  }),
  hover: {
    scale: 1.18,
    textShadow: '0 0 16px #fff, 0 0 32px #a78bfa',
    filter: 'blur(0.5px)',
    zIndex: 10,
    transition: { type: 'spring', stiffness: 300, damping: 12 }
  }
}

const TechWordCloud = () => (
  <div className="relative flex items-center justify-center w-full h-72 md:h-[420px] bg-gradient-to-br from-[#232347] via-[#1a1a2a] to-[#312e81] rounded-3xl overflow-hidden shadow-lg">
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', opacity: 0.13 }} />
    <div className="relative w-full h-full flex flex-wrap items-center justify-center md:grid md:grid-cols-4 md:grid-rows-4 gap-2 md:gap-4">
      {techWords.map((word, i) => (
        <motion.span
          key={word}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-base md:text-lg select-none cursor-pointer bg-clip-text text-transparent bg-gradient-to-r ${getRandomGradient()} shadow-md`}
          custom={i}
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={wordVariants}
          style={{ fontFamily: 'Inter, Poppins, sans-serif', userSelect: 'none', whiteSpace: 'nowrap' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  </div>
)

export default TechWordCloud 