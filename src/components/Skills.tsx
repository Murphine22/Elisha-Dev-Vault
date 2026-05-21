import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Database, Megaphone, Shield, Terminal, GitBranch, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} />,
    gradient: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML5', level: 95, color: '#E34F26' },
      { name: 'CSS3 / Tailwind', level: 92, color: '#06B6D4' },
      { name: 'JavaScript (ES6+)', level: 90, color: '#F7DF1E' },
      { name: 'React.js', level: 88, color: '#61DAFB' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'Bootstrap', level: 88, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    gradient: 'from-emerald-500 to-green-400',
    skills: [
      { name: 'Node.js', level: 88, color: '#339933' },
      { name: 'Express.js', level: 85, color: '#000000' },
      { name: 'TypeScript (Server)', level: 84, color: '#3178C6' },
      { name: 'REST API Design', level: 87, color: '#FF6C37' },
      { name: 'PHP', level: 80, color: '#777BB4' },
      { name: 'API Integration', level: 86, color: '#0096FF' },
    ],
  },
  {
    title: 'Database & Auth',
    icon: <Database size={24} />,
    gradient: 'from-purple-500 to-violet-400',
    skills: [
      { name: 'MongoDB', level: 85, color: '#47A248' },
      { name: 'Mongoose ODM', level: 83, color: '#880000' },
      { name: 'MySQL', level: 80, color: '#4479A1' },
      { name: 'JWT Authentication', level: 84, color: '#D63AFF' },
      { name: 'Database Design', level: 82, color: '#FF6347' },
      { name: 'Data Modeling', level: 80, color: '#20B2AA' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <Terminal size={24} />,
    gradient: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'Git & GitHub', level: 88, color: '#F05032' },
      { name: 'Postman / API Testing', level: 85, color: '#FF6C37' },
      { name: 'VS Code', level: 92, color: '#007ACC' },
      { name: 'Vercel Deployment', level: 83, color: '#000000' },
      { name: 'npm / Packages', level: 85, color: '#CB3837' },
      { name: 'WordPress', level: 85, color: '#21759B' },
    ],
  },
  {
    title: 'Architecture',
    icon: <Layers size={24} />,
    gradient: 'from-rose-500 to-pink-400',
    skills: [
      { name: 'MVC Pattern', level: 85, color: '#FF4500' },
      { name: 'CRUD Operations', level: 90, color: '#32CD32' },
      { name: 'Middleware Design', level: 83, color: '#8A2BE2' },
      { name: 'Error Handling', level: 85, color: '#DC143C' },
      { name: 'Input Validation', level: 84, color: '#FF8C00' },
      { name: 'Security Best Practices', level: 82, color: '#2E8B57' },
    ],
  },
  {
    title: 'Digital & Marketing',
    icon: <Megaphone size={24} />,
    gradient: 'from-indigo-500 to-blue-400',
    skills: [
      { name: 'SEO Optimization', level: 88, color: '#4285F4' },
      { name: 'Content Creation', level: 90, color: '#FF1493' },
      { name: 'Social Media Ads', level: 85, color: '#1877F2' },
      { name: 'AI Prompt Engineering', level: 87, color: '#10A37F' },
      { name: 'Graphic Design', level: 85, color: '#FF6F00' },
      { name: 'UI/UX Design', level: 83, color: '#FF4081' },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill; index: number; isVisible: boolean }> = ({ skill, index, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isVisible ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
        {skill.name}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.08 + 0.5 }}
        className="text-xs font-bold text-gray-500 dark:text-gray-400"
      >
        {skill.level}%
      </motion.span>
    </div>
    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`,
          boxShadow: `0 0 8px ${skill.color}40`,
        }}
      >
        <div className="absolute inset-0 rounded-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
      </motion.div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
    }
    setIsVisible(false);
    transitionRef.current = setTimeout(() => {
      setActiveCategory(index);
      setIsVisible(true);
      transitionRef.current = null;
    }, 200);
  };

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          Technical <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Full-stack development expertise spanning frontend, backend, databases, and cloud deployment
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => handleCategoryChange(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === index
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            {category.icon}
            {category.title}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`bg-gradient-to-br ${skillCategories[activeCategory].gradient} p-[1px] rounded-2xl shadow-xl`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skillCategories[activeCategory].gradient} text-white`}>
                  {skillCategories[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skillCategories[activeCategory].skills.length} core competencies
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={`${activeCategory}-${skillIndex}`}
                    skill={skill}
                    index={skillIndex}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
      >
        {[
          { icon: <Server size={20} />, label: 'Backend APIs', value: '10+', gradient: 'from-emerald-500 to-green-400' },
          { icon: <Database size={20} />, label: 'Databases', value: '3+', gradient: 'from-purple-500 to-violet-400' },
          { icon: <Shield size={20} />, label: 'Auth Systems', value: 'JWT/OAuth', gradient: 'from-rose-500 to-pink-400' },
          { icon: <GitBranch size={20} />, label: 'Git Commits', value: '500+', gradient: 'from-orange-500 to-amber-400' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
          >
            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.gradient} text-white mb-2`}>
              {stat.icon}
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
