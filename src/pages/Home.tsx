import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, Palette, MessageSquare, Briefcase, Clipboard, Edit } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';

const features = [
  {
    icon: <Code size={24} />,
    title: 'Web Development',
    description: 'Creating responsive and modern web applications using cutting-edge technologies.',
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
    description: 'Crafting engaging and high-quality content tailored to your brand’s voice and audience.',
  },
];

// Updated project images with free usable pictures
const projects = [
  {
    title: 'Daily Gist news website',
    description:
      'A news website developed with HTML, CSS, JavaScript, Bootstrap Framework, and API integration to handle news updates.',
    link: 'https://daily-gist-4m69.vercel.app/',
    image: 'https://i.pinimg.com/236x/89/5e/df/895edf7ec57bc8687ec69c92f862cd44.jpg',
  },
  {
    title: 'Consciousness AI Chatbot',
    description: 'An AI-powered chatbot developed using React and integrated with c.ai.',
    link: 'https://character.ai/chat/YpiOlZJ_M9XC-LGQtvNnaH-opABWiVo2vXFdXiG5Q4M',
    image: 'https://i.pinimg.com/474x/c2/e7/5e/c2e75ef38ca2482ca20ba70fc5d8b236.jpg',
  },
  {
    title: 'Graphic Design Portfolio',
    description:
      'A sleek and modern logo design created for Murphine Tech, reflecting innovation and technological advancement.',
    link: 'https://www.canva.com/join/hqs-cbv-qbg',
    image: 'https://i.pinimg.com/236x/17/06/b6/1706b6777a4dfce9d5bb827ad8e5be13.jpg',
  },
  {
    title: 'CFHI NGO WordPress Website',
    description:
      'A responsive website manageded for CFHI, a non-governmental organization focused on healthcare and community development.',
    link: 'https://www.cfhealthinitiative.org',
    image: 'https://www.cfhinitiative.org/wp-content/uploads/2019/05/cropped-CFHI-logo-1-1-181x73.png',
  },
  {
    title: 'Murphine Tech Logo Design',
    description:
      'A sleek and modern website and logo design created for Murphine Tech, reflecting innovation and technological advancement.',
    link: 'https://www.murphinetech.live',
    image: 'https://img1.wsimg.com/isteam/stock/9523',
  },
  {
    title: 'LinkedIn Profile Design',
    description:
      'Custom LinkedIn logo and banner designs tailored to enhance professional branding and online presence.',
    link: 'https://www.example-linkedin/in/murphine22',
    image: 'https://media.licdn.com/dms/image/v2/D4D16AQFD2I2fqtjCAg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1729246408183?e=1741824000&v=beta&t=07Opfvi7fbx4uE1rWVzr1ZxpO1hS7XlrH__LCqjrCZY',
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
        <title>Elisha Ejimofor - Web Developer & Digital Marketer</title>
        <meta
          name="description"
          content="Portfolio of Elisha Ejimofor, a skilled web developer, designer, and digital marketer specializing in AI optimization."
        />
      </Helmet>

      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <HeroSection />
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
