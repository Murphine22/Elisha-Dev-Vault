import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Megaphone, Briefcase } from 'lucide-react';

const skillCategories = [
  {
    title: 'Front End',
    icon: <Code size={24} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Back End',
    icon: <Server size={24} />,
    skills: ['PHP', 'MySQL', 'WordPress', 'API Integration'],
  },
  {
    title: 'Digital',
    icon: <Megaphone size={24} />,
    skills: ['SEO', 'Content Creator', 'Social Media', 'Ads Setup', 'AI Prompt Engineering'],
  },
  {
    title: 'Others',
    icon: <Briefcase size={24} />,
    skills: ['Graphic Design', 'UI/UX Design', 'Project Management', 'Team Leadership', 'Business Management'],
  },
];

const Skills = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="text-indigo-600 dark:text-indigo-400">{category.icon}</div>
              <h3 className="text-xl font-semibold ml-2 text-gray-900 dark:text-white">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;