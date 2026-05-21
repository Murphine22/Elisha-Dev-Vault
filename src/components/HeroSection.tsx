import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from './ImageGallery';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <ImageGallery />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Full-Stack Developer</span>
        </div>
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-indigo-600">Elisha Ejimofor</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A passionate Full-Stack Web Developer, Graphic Designer, and Digital Marketer with over a decade of collective experience. I build beautiful frontends and powerful backend systems with modern technologies.
        </p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span>Backend expertise: Node.js, Express.js, MongoDB, TypeScript</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Frontend mastery: React, JavaScript, Tailwind CSS</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>API Design, JWT Auth, Database Architecture</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span>Expert in AI optimization and prompt engineering</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
            <span>Dedicated mentor and digital marketing strategist</span>
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          {['Node.js', 'Express', 'MongoDB', 'React', 'TypeScript', 'REST APIs'].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
