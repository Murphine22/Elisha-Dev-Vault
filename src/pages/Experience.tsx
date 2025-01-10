import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
  {
    id: 1,
    title: 'Digital Specialist and Instructor',
    company: 'Murphine Technologies',
    period: 'April 2024 - Jan 2025',
    description: 'Designed and delivered comprehensive training programs for aspiring developers, focusing on modern web development, content creation, and digital marketing. Implemented strategies to enhance learning experiences, utilizing cutting-edge tools and techniques.',
    achievements: [
      { id: 1, text: 'Trained young developers in web development and design using HTML, CSS, JavaScript, and WordPress' },
      { id: 2, text: 'Developed practical modules on content creation, SEO optimization, and graphic design with Canva' },
      { id: 3, text: 'Introduced prompt engineering techniques to optimize AI tool utilization for creative problem-solving' },
      { id: 4, text: 'Facilitated hands-on workshops that improved participants’ project-based learning outcomes by 80%' },
      { id: 5, text: 'Mentored trainees to successfully execute real-world projects, enhancing their employability in the tech industry' }
    ],
    location: 'Abuja, Nigeria'
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'Periscope Consulting',
    period: 'Aug - Sept 2024',
    description: 'Led high-profile project (Daily Gist website), API Integration, and implemented best practices in development.',
    achievements: [
      { id: 1, text: 'Developed responsive web applications using React and Tailwind CSS' },
      { id: 2, text: 'Integrated third-party APIs and services' },
      { id: 3, text: 'Improved website performance by 40%' }
    ],
    location: 'Abuja, Nigeria'
  },
  {
    id: 3,
    title: 'Junior Front End Developer (Intern)',
    company: 'OS Concept Solutions',
    period: 'Jan 2024 - July 2024',
    description: 'Collaborated with senior developers to build user-friendly websites, create engaging content, and design visually appealing graphics while enhancing skills in SEO and prompt engineering.',
    achievements: [
      { id: 1, text: 'Designed and updated web pages using HTML, CSS, and JavaScript' },
      { id: 2, text: 'Created graphics and content for marketing and branding purposes' },
      { id: 3, text: 'Optimized website performance and improved SEO rankings' },
      { id: 4, text: 'Developed and refined AI prompts for content generation' },
      { id: 5, text: 'Worked closely with a team to deliver projects on time' }
    ],
    location: 'Abuja, Nigeria'
  },
  {
    id: 4,
    title: 'Affiliate Marketer',
    company: "Timoyex Int'l",
    period: 'April 2019 - November 2024',
    description: 'Promoted solar energy products through strategic affiliate partnerships and innovative digital marketing campaigns.',
    achievements: [
      { id: 1, text: 'Generated multiple new customer leads, resulting in significant growth for solar energy adoption' },
      { id: 2, text: 'Expanded the affiliate network by onboarding new high-performing partners' },
      { id: 3, text: 'Designed and implemented targeted marketing funnels that improved conversion rates by 30%' }
    ],
    location: 'Remote'
  },
  {
    id: 5,
    title: 'Business Developer (Branch Manager)',
    company: 'Forgo Battery Company Ltd',
    period: 'Feb 2017 - April 2022',
    description: 'Managing branch operations, developing business strategies, and driving sales growth.',
    achievements: [
      { id: 1, text: 'Increased branch revenue by 35% in the first quarter' },
      { id: 2, text: 'Implemented new inventory management system' },
      { id: 3, text: 'Developed and trained high-performing sales team' }
    ],
    location: 'Ilorin, Nigeria'
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Experience - Elisha Ejimofor</title>
        <meta name="description" content="Professional experience and career journey of Elisha Ejimofor" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My journey in technology and business development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
