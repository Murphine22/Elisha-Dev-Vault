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
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-indigo-600">Elisha Ejimofor</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A passionate Web Developer, Graphic Designer, and Digital Marketer with over a decade of collective experience. I specialize in creating beautiful, functional websites and optimizing digital strategies for businesses.
        </p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span>Expert in AI optimization and prompt engineering</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span>Proficient in JavaScript React, PHP, and WordPress</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span>Skilled in SEO and content marketing</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span>Dedicated mentor and trainer in tech</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HeroSection;