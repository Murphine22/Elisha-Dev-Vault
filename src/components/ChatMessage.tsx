import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  type: 'user' | 'bot';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`flex items-start max-w-[80%] ${
          type === 'user' ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full ${
            type === 'user' ? 'bg-indigo-600 ml-2' : 'bg-gray-600 mr-2'
          }`}
        >
          {type === 'user' ? (
            <User size={16} className="text-white" />
          ) : (
            <Bot size={16} className="text-white" />
          )}
        </div>
        <div
          className={`p-3 rounded-lg ${
            type === 'user'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
          }`}
        >
          {content}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;