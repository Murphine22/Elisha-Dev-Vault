import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, MessageSquare, Briefcase, GraduationCap, Users, PenTool, Megaphone, Server, Database, Shield, Terminal } from 'lucide-react';

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
    { icon: <Code size={24} />, title: 'Full-Stack Development', description: 'Expert in React, Node.js, Express.js, TypeScript, and modern web technologies' },
    { icon: <Server size={24} />, title: 'Backend Engineering', description: 'Building scalable REST APIs with Express.js, middleware design, and MVC architecture' },
    { icon: <Database size={24} />, title: 'Database Management', description: 'MongoDB with Mongoose ODM, MySQL, data modeling, and efficient query design' },
    { icon: <Shield size={24} />, title: 'Auth & Security', description: 'JWT authentication, bcrypt hashing, input validation, and security best practices' },
    { icon: <Palette size={24} />, title: 'Graphics Design', description: 'Creative UI/UX and graphic design solutions' },
    { icon: <MessageSquare size={24} />, title: 'AI Prompt Engineering', description: 'Specialized in AI optimization and prompt engineering' },
    { icon: <Briefcase size={24} />, title: 'Business Development', description: 'Project management, strategic digital marketing and business consulting' },
    { icon: <GraduationCap size={24} />, title: 'Education', description: 'TS Academy trained, passionate about teaching and mentoring in tech' },
    { icon: <Terminal size={24} />, title: 'DevOps & Tools', description: 'Git/GitHub, Postman API testing, Vercel deployment, npm ecosystem' },
    { icon: <Users size={24} />, title: 'Community', description: 'Active contributor to tech communities' },
    { icon: <PenTool size={24} />, title: 'Content Creation', description: 'Expert in creating engaging digital content and copywriting' },
    { icon: <Megaphone size={24} />, title: 'Digital Marketing', description: 'Specialized in SEO, social media, and online advertising' },
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
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full mb-4">
          <Terminal size={16} className="text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Full-Stack Developer</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Full-stack developer trained at TS Academy, passionate about creating robust backend systems and beautiful digital experiences
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
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500/30"
          >
            <div className="flex items-center mb-4 text-indigo-600 dark:text-indigo-400">
              {skill.icon}
              <h3 className="text-lg font-semibold ml-2">{skill.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <div className="space-y-4">
            {[
              'Started as a self-taught developer',
              'Built expertise in frontend with React, JavaScript, and modern CSS',
              'Completed intensive backend training at TS Academy (Phoenix Cohort)',
              'Mastered Node.js, Express.js, MongoDB, and TypeScript for server-side development',
              'Built production-ready REST APIs with authentication and database design',
              'Worked with various startups and enterprises',
              'Mentored dozens of aspiring developers',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="flex items-start"
              >
                <div className={`w-2 h-2 mt-2 rounded-full mr-3 flex-shrink-0 ${
                  index >= 2 && index <= 4 ? 'bg-emerald-500' : 'bg-indigo-600'
                }`} />
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4">My Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I believe in creating technology that's not just functional, but also accessible and meaningful. With my full-stack expertise spanning frontend and backend development, I help businesses and individuals harness the power of modern web technologies and AI to achieve their objectives.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My backend training at TS Academy has equipped me to build complete, production-ready applications - from designing database schemas to deploying secure, scalable APIs.
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
