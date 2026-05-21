import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, Palette, MessageSquare, Briefcase, Clipboard, Edit, Server, Database } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import BackendShowcase from '../components/BackendShowcase';
import Certifications from '../components/Certifications';

const features = [
  {
    icon: <Code size={24} />,
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with React frontends and Node.js/Express backends.',
  },
  {
    icon: <Server size={24} />,
    title: 'Backend & API Development',
    description: 'Designing scalable REST APIs with Express.js, MongoDB, JWT authentication, and clean architecture.',
  },
  {
    icon: <Database size={24} />,
    title: 'Database Engineering',
    description: 'Crafting efficient data models with MongoDB & Mongoose, implementing robust CRUD operations.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Graphics Design',
    description: 'Designing beautiful and intuitive user interfaces for exceptional user experiences.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'AI Prompting',
    description: 'Implementing AI-powered features and optimizing prompts for better results.',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Digital Marketing',
    description: 'Developing comprehensive digital marketing strategies for business growth.',
  },
  {
    icon: <Clipboard size={24} />,
    title: 'Project Management',
    description: 'Efficiently managing projects from start to finish with timely delivery and resource optimization.',
  },
  {
    icon: <Edit size={24} />,
    title: 'Content Creation',
    description: 'Crafting engaging and high-quality content tailored to your brand\u2019s voice and audience.',
  },
];

const projects = [
  {
    title: 'Student Record API',
    description:
      'A full CRUD REST API built with Node.js, Express.js, and MongoDB for managing student records with validation, error handling, and clean architecture.',
    link: 'https://github.com/Murphine22/TS-Academy-student-API',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'LMS Capstone Project',
    description:
      'A Learning Management System capstone project demonstrating backend development expertise with database design and API architecture.',
    link: 'https://github.com/Murphine22/LMS-Capstone-Project',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    tags: ['Backend', 'API', 'Database'],
  },
  {
    title: 'Daily Gist News Website',
    description:
      'A news website developed with HTML, CSS, JavaScript, Bootstrap Framework, and API integration to handle news updates.',
    link: 'https://daily-gist-4m69.vercel.app/',
    image: 'https://i.pinimg.com/236x/89/5e/df/895edf7ec57bc8687ec69c92f862cd44.jpg',
    tags: ['JavaScript', 'API', 'Bootstrap'],
  },
  {
    title: 'Cosmos Explorer',
    description: 'A full-stack space exploration project built with React, showcasing API integration and dynamic data rendering.',
    link: 'https://github.com/Murphine22/Cosmos-Explorer',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600',
    tags: ['React', 'Full-Stack', 'API'],
  },
  {
    title: 'Eli-Pay Fintech App',
    description:
      'A modern digital fintech application demonstrating payment integration, user authentication, and financial data management.',
    link: 'https://github.com/Murphine22/Eli-Pay',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600',
    tags: ['React', 'Fintech', 'Auth'],
  },
  {
    title: 'CampusLink App',
    description:
      'A campus networking application connecting students and faculty with real-time features and modern UI.',
    link: 'https://github.com/Murphine22/CampusLink-App',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600',
    tags: ['React', 'Full-Stack', 'Social'],
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <Helmet>
        <title>Elisha Ejimofor - Full-Stack Developer & Digital Marketer</title>
        <meta
          name="description"
          content="Portfolio of Elisha Ejimofor - Full-Stack Developer skilled in Node.js, Express.js, MongoDB, React, TypeScript. TS Academy trained backend developer, designer, and digital marketer."
        />
      </Helmet>

      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <HeroSection />
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-400">End-to-end solutions from backend APIs to beautiful frontends</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-500/30"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BackendShowcase />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Full-stack applications and backend APIs I've built</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>

      <Certifications />
    </motion.div>
  );
};

export default Home;
