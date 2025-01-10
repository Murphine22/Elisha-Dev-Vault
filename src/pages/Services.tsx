import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Megaphone, MessageSquare, PenTool, Share2, Briefcase, Users, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies like React and Tailwind CSS.',
    icon: <Code size={48} />,
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
    description: 'Personalized training in web development, digital marketing, and design for individuals and groups.',
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
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Comprehensive solutions for your digital needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="text-indigo-600 dark:text-indigo-400 mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
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