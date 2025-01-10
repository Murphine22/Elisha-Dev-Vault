import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, MessageSquare, Briefcase, GraduationCap, Users, PenTool, Megaphone } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const skills = [
    { icon: <Code size={24} />, title: 'Web Development', description: 'Expert in React, Node.js, WordPress, and modern web technologies' },
    { icon: <Palette size={24} />, title: 'Graphics Design', description: 'Creative UI/UX and graphic design solutions' },
    { icon: <MessageSquare size={24} />, title: 'AI Prompt Engineering', description: 'Specialized in AI optimization and prompt engineering' },
    { icon: <Briefcase size={24} />, title: 'Business Development', description: 'Project management, Strategic digital marketing and business consulting' },
    { icon: <GraduationCap size={24} />, title: 'Education', description: 'Passionate about teaching and mentoring in tech' },
    { icon: <Users size={24} />, title: 'Community', description: 'Active contributor to tech communities' },
    { icon: <PenTool size={24} />, title: 'Content Creation', description: 'Expert in creating engaging digital content and copywriting' },
    { icon: <Megaphone size={24} />, title: 'Digital Marketing', description: 'Specialized in SEO, social media, and online advertising' }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Passionate about creating digital experiences that make a difference
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300"
          >
            <div className="flex items-center mb-4 text-indigo-600">
              {skill.icon}
              <h3 className="text-xl font-semibold ml-2">{skill.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <div className="space-y-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
              <p>Started as a self-taught developer</p>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center"
            >
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
              <p>Worked with various startups and enterprises</p>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center"
            >
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
              <p>Mentored dozens of aspiring developers</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">My Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I believe in creating technology that's not just functional, but also accessible and meaningful. My goal is to help businesses and individuals harness the power of modern web technologies and AI to achieve their objectives.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.href = '/contact'}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;