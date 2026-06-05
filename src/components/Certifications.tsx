import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle, BookOpen } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  period: string;
  description: string;
  skills: string[];
  gradient: string;
  highlight?: boolean;
}

const certifications: Certification[] = [
  {
    title: 'Backend Development Program',
    issuer: 'TS Academy',
    period: '2025',
    description: 'Intensive backend development training covering server-side programming, API design, database management, authentication, and deployment with Node.js, Express.js, MongoDB, and TypeScript.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'REST APIs', 'JWT Auth', 'Database Design', 'API Testing'],
    gradient: 'from-emerald-500 to-cyan-500',
    highlight: true,
  },
  {
    title: 'Frontend Web Development',
    issuer: 'Self-taught & Mentored',
    period: '2014 - Present',
    description: 'Continuous learning in modern frontend technologies including React, TypeScript, Tailwind CSS, and responsive design principles.',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Digital Marketing & AI',
    issuer: 'Professional Experience',
    period: '2019 - Present',
    description: 'Hands-on expertise in digital marketing strategies, SEO optimization, content creation, and AI prompt engineering.',
    skills: ['SEO', 'Content Marketing', 'AI Prompting', 'Social Media', 'Analytics'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-full mb-4">
            <Award size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Training & Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Committed to continuous growth through formal training and hands-on experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative group ${cert.highlight ? 'scale-[1.02]' : ''}`}
            >
              {cert.highlight && (
                <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity blur-sm" />
              )}
              <div className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                cert.highlight ? 'border-0' : 'border border-gray-100 dark:border-gray-700'
              }`}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg`}>
                      <BookOpen size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} />
                        <span>{cert.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full font-medium ${
                            cert.highlight
                              ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          }`}
                        >
                          <CheckCircle size={10} />
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                {cert.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500 text-white shadow-lg animate-pulse">
                      NEW
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
