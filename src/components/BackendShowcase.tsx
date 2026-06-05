import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Zap, GitBranch, Terminal, Code, Layers } from 'lucide-react';

const backendFeatures = [
  {
    icon: <Server size={28} />,
    title: 'RESTful API Development',
    description: 'Building scalable, well-structured REST APIs with Express.js following industry best practices and clean architecture.',
    tags: ['Express.js', 'Node.js', 'REST'],
    gradient: 'from-green-400 to-emerald-600',
  },
  {
    icon: <Database size={28} />,
    title: 'Database Engineering',
    description: 'Designing efficient data models with MongoDB & Mongoose, implementing CRUD operations with proper indexing and relationships.',
    tags: ['MongoDB', 'Mongoose', 'MySQL'],
    gradient: 'from-purple-400 to-violet-600',
  },
  {
    icon: <Shield size={28} />,
    title: 'Authentication & Security',
    description: 'Implementing JWT-based authentication, password hashing with bcrypt, and middleware-level security for production-ready apps.',
    tags: ['JWT', 'bcrypt', 'Auth'],
    gradient: 'from-rose-400 to-red-600',
  },
  {
    icon: <Layers size={28} />,
    title: 'MVC Architecture',
    description: 'Structuring applications with clean Model-View-Controller patterns, separating concerns for maintainability and scalability.',
    tags: ['MVC', 'Clean Code', 'Patterns'],
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    icon: <Zap size={28} />,
    title: 'Middleware & Validation',
    description: 'Custom middleware chains for request validation, error handling, rate limiting, and CORS configuration.',
    tags: ['Middleware', 'Validation', 'Error Handling'],
    gradient: 'from-amber-400 to-orange-600',
  },
  {
    icon: <GitBranch size={28} />,
    title: 'Version Control & Deployment',
    description: 'Professional Git workflow with feature branching, CI/CD awareness, and deployment to cloud platforms like Vercel and Render.',
    tags: ['Git', 'GitHub', 'Deployment'],
    gradient: 'from-cyan-400 to-teal-600',
  },
];

const techStack = [
  { name: 'Node.js', color: '#339933' },
  { name: 'Express', color: '#000000' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'JWT', color: '#D63AFF' },
  { name: 'Mongoose', color: '#880000' },
  { name: 'REST APIs', color: '#FF6C37' },
  { name: 'Postman', color: '#FF6C37' },
];

const BackendShowcase: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Terminal size={16} className="text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">TS Academy Certified</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Backend Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trained at TS Academy in modern backend development - building production-ready APIs, 
            databases, and server-side architecture with Node.js and TypeScript
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-4 py-2 rounded-full border text-sm font-medium cursor-default"
              style={{
                borderColor: `${tech.color}40`,
                backgroundColor: `${tech.color}15`,
                color: tech.color === '#000000' ? '#9CA3AF' : tech.color,
              }}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {backendFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl`} />
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300 border border-gray-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 border border-emerald-500/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                    <Code size={36} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-1">TS Academy Backend Development</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Completed intensive backend training covering Node.js, Express.js, MongoDB, TypeScript, 
                  REST API design, authentication, and deployment - building real-world production applications.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['Node.js', 'Express', 'MongoDB', 'TypeScript', 'JWT', 'REST APIs'].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-xs rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackendShowcase;
