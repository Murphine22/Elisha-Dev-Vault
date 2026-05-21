import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Megaphone, MessageSquare, PenTool, Share2, Briefcase, Users, BookOpen, Server, Database, Shield } from 'lucide-react';

const services = [
  {
    title: 'Backend API Development',
    description: 'Scalable REST APIs built with Node.js and Express.js, featuring JWT authentication, MongoDB databases, input validation, and production-ready error handling.',
    icon: <Server size={48} />,
    highlight: true,
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Complete web applications with React frontends and Node.js/Express backends, connected to MongoDB or MySQL databases.',
    icon: <Code size={48} />,
    highlight: true,
  },
  {
    title: 'Database Design & Management',
    description: 'Efficient MongoDB schema design with Mongoose ODM, data modeling, indexing, and query optimization for performant applications.',
    icon: <Database size={48} />,
    highlight: true,
  },
  {
    title: 'Authentication & Security',
    description: 'Secure authentication systems with JWT tokens, bcrypt password hashing, role-based access control, and API security best practices.',
    icon: <Shield size={48} />,
  },
  {
    title: 'Graphic Design',
    description: 'Visually appealing designs for branding, marketing materials, and user interfaces.',
    icon: <Palette size={48} />,
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, content marketing, and social media management.',
    icon: <Megaphone size={48} />,
  },
  {
    title: 'Social Media Advertisement',
    description: 'Strategic social media campaigns, paid advertising, and audience targeting across all major platforms.',
    icon: <Share2 size={48} />,
  },
  {
    title: 'Digital Skills Tutor',
    description: 'Personalized training in full-stack web development, backend engineering, digital marketing, and design for individuals and groups.',
    icon: <BookOpen size={48} />,
  },
  {
    title: 'Prompt Engineering',
    description: 'Expert AI prompt crafting and optimization for ChatGPT, DALL-E, and other AI models.',
    icon: <MessageSquare size={48} />,
  },
  {
    title: 'Content Creation',
    description: 'Engaging, SEO-optimized content including blog posts, articles, and marketing copy.',
    icon: <PenTool size={48} />,
  },
  {
    title: 'Business Consulting',
    description: 'Expert guidance on digital transformation, market analysis, and growth strategies.',
    icon: <Briefcase size={48} />,
  },
  {
    title: 'Community Management',
    description: 'Building and managing online communities, engagement strategies, and social presence.',
    icon: <Users size={48} />,
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-full mb-4">
          <Code size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Full-Stack Services</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          From backend APIs to beautiful frontends - comprehensive solutions for your digital needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border ${
              'highlight' in service && service.highlight
                ? 'border-emerald-200 dark:border-emerald-500/30'
                : 'border-gray-100 dark:border-gray-700'
            }`}
          >
            {'highlight' in service && service.highlight && (
              <div className="absolute top-3 right-3">
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500 text-white">
                  NEW
                </span>
              </div>
            )}
            <div className={`mb-6 ${
              'highlight' in service && service.highlight
                ? 'text-emerald-500 dark:text-emerald-400'
                : 'text-indigo-600 dark:text-indigo-400'
            }`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 px-6 py-2 rounded-full transition-colors ${
                'highlight' in service && service.highlight
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
              onClick={() => window.location.href = '/contact'}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
