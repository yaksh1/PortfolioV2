import React, { useState } from 'react';
import { Clock, Users, CheckCircle, Play, Pause, ArrowRight, ArrowLeft, MoreHorizontal, Calendar, ListTodo, FileText, Boxes } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import javaSVG from '../assets/java-original.svg';
import springSVG from '../assets/spring-original.svg';
import reactSVG from '../assets/react-original.svg';
import javascriptSVG from '../assets/javascript-original.svg';
import nodejsSVG from '../assets/nodejs-original.svg';
import html5SVG from '../assets/html5-original.svg';
import css3SVG from '../assets/css3-original.svg';
import mongodbSVG from '../assets/mongodb-original.svg';
import typescriptSVG from '../assets/typescript-original.svg';
import reduxSVG from '../assets/redux-original.svg';
import expressSVG from '../assets/express-original.svg';
import gitSVG from '../assets/git-original.svg';
import dockerSVG from '../assets/docker-original.svg';
import figmaSVG from '../assets/figma-original.svg';
import '../App.css';

const techStack = [
  { name: 'Java', src: javaSVG },
  { name: 'Spring', src: springSVG },
  { name: 'React', src: reactSVG },
  { name: 'JavaScript', src: javascriptSVG },
  { name: 'Node.js', src: nodejsSVG },
  { name: 'HTML5', src: html5SVG },
  { name: 'CSS3', src: css3SVG },
  { name: 'MongoDB', src: mongodbSVG },
  { name: 'TypeScript', src: typescriptSVG },
  { name: 'Redux', src: reduxSVG },
  { name: 'Express', src: expressSVG },
  { name: 'Git', src: gitSVG },
  { name: 'Docker', src: dockerSVG },
  { name: 'Figma', src: figmaSVG },
];

export default function ProjectDashboard() {
  const [taskProgress, setTaskProgress] = useState(70);
  const [isTaskActive, setIsTaskActive] = useState(false);
  const handleTaskProgressChange = (e) => setTaskProgress(e.target.value);
  const toggleTaskStatus = () => setIsTaskActive(!isTaskActive);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Dashboard Card */}
      <div className="relative w-full min-h-[260px] p-8 flex flex-col rounded-3xl border border-white/20 shadow-2xl overflow-hidden floating"
        style={{
          background: 'rgba(24, 25, 43, 0.70)',
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 40px 0 rgba(80,0,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.18)'
        }}
      >
        {/* Current Project Badge */}
        <div className="absolute top-4 right-4 z-40">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white text-xs font-semibold shadow-lg backdrop-blur-md border border-white/20" style={{ letterSpacing: '0.04em', boxShadow: '0 2px 12px 0 rgba(168,85,247,0.18)' }}>
            CURRENT PROJECT
          </span>
        </div>
        {/* Neon gradient glow in top-left */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 40% 40%, #a78bfa 0%, #f472b6 60%, transparent 100%)',
            filter: 'blur(32px)',
            opacity: 0.7
          }}
        />
        {/* Layered blurred color blobs */}
        <div className="absolute bottom-0 right-0 w-56 h-40 rounded-full z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 60% 60%, #38bdf8 0%, #a78bfa 60%, transparent 100%)',
            filter: 'blur(40px)',
            opacity: 0.5
          }}
        />
        {/* Grain/noise overlay */}
        <div className="absolute inset-0 z-30 pointer-events-none mix-blend-soft-light" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', opacity: 0.18 }} />
        {/* Content */}
        <div className="relative z-20 flex flex-col h-full">
          {/* Header Section - Settings and Account icons removed */}
          <div className="flex items-center justify-end mb-4"></div>
          {/* Current Project Overview Section */}
          <div className="flex items-center p-4 mb-4">
            <div className="w-24 h-24 bg-transparent rounded-lg flex items-center justify-center mr-4 overflow-hidden relative">
              {/* Lucide Boxes icon as pattern */}
              <div className="flex items-center justify-center w-full h-full">
                <Boxes className="w-28 h-28 text-white/60 opacity-70" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-white text-2xl font-bold mb-1">Website Redesign Project</h3>
              <p className="text-pink-400 text-sm mb-3">Overview of current sprint tasks and progress.</p>
              <div className="flex items-center text-blue-300 text-sm">
                <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-300 hover:underline hover:text-blue-400 font-semibold">
                  <FaGithub className="w-4 h-4 text-blue-300" />
                  <span className="text-xs md:text-sm font-medium">github.com/yourusername/your-repo</span>
                </a>
              </div>
            </div>
          </div>
          {/* Tech Stack Section */}
          <h3 className="text-white text-xl font-semibold mb-3">Tech Stack</h3>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="grid grid-cols-4 md:grid-cols-7 gap-4 w-full px-2">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center">
                  <img src={tech.src} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_2px_8px_rgba(80,180,255,0.15)]" />
                  <span className="text-xs text-gray-300 mt-1 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Project Status Bar - now separate, glassmorphic */}
      <div className="relative w-full mt-8 rounded-full border border-white/20 shadow-2xl flex-shrink-0 p-3 flex items-center justify-between overflow-hidden floating"
        style={{
          background: 'rgba(24, 25, 43, 0.70)',
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 24px 0 rgba(80,0,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.12)'
        }}
      >
        {/* Neon gradient glow in left corner */}
        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 40% 40%, #a78bfa 0%, #f472b6 60%, transparent 100%)',
            filter: 'blur(24px)',
            opacity: 0.7
          }}
        />
        {/* Grain/noise overlay */}
        <div className="absolute inset-0 z-30 pointer-events-none mix-blend-soft-light" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', opacity: 0.18 }} />
        <div className="relative z-20 flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <img src="https://placehold.co/40x40/000000/FFFFFF?text=Task" alt="Current Task" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-white text-sm font-medium">Current Task: Bug Fix #123</p>
              <p className="text-gray-400 text-xs">Assigned to: You</p>
            </div>
            <ListTodo size={16} className="text-pink-400 hover:text-blue-500 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-4 text-white text-xl">
            <ArrowLeft size={20} className="hover:text-gray-300 cursor-pointer" />
            <button className="bg-pink-400 text-gray-900 p-2 rounded-full hover:bg-pink-300 transition-colors" onClick={toggleTaskStatus}>
              {isTaskActive ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <ArrowRight size={20} className="hover:text-gray-300 cursor-pointer" />
            <CheckCircle size={20} className="hover:text-green-400 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2 text-white text-xs">
            <Clock size={16} />
            <input
              type="range"
              min="0"
              max="100"
              value={taskProgress}
              onChange={handleTaskProgressChange}
              className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <Users size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
