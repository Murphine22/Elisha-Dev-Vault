import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

interface Achievement {
  id: number;
  text: string;
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: Achievement[];
  location: string;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  location,
  index
}) => {
  return (
    <motion.div
      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition-all"
    >
      <div className="flex flex-wrap items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
            <Briefcase size={18} className="mr-2" />
            <span>{company}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar size={18} className="mr-2" />
            <span>{period}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
            <MapPin size={18} className="mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      <div className="space-y-2">
        <h4 className="font-semibold flex items-center text-indigo-600 dark:text-indigo-400">
          <Award size={18} className="mr-2" />
          Key Achievements
        </h4>
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: achievement.id * 0.1 }}
            className="flex items-start ml-6"
          >
            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{achievement.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;