import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: string }>>([
    {
      type: 'bot',
      content: "Hi! I'm your AI assistant. I can help you with information about Elisha's services, pricing, and technology expertise. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Generate response based on user input
    const response = generateResponse(userMessage.toLowerCase());
    
    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (input: string): string => {
    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return `Here are my service pricing details:
- Web Development: Starting from $1000
- Graphic Design: Starting from $500
- Digital Marketing: Starting from $800/month
- AI Prompt Engineering: Custom pricing based on project
- Training/Mentorship: $50/hour
Would you like more details about any specific service?`;
    }
    
    if (input.includes('contact') || input.includes('reach')) {
      return `You can reach me through:
- Email: elishaejimofor@gmail.com
- Phone: (+234) 816-058-9186
- WhatsApp: Available via the button on the bottom right
- Location: Abuja, Nigeria
How would you prefer to connect?`;
    }
    
    if (input.includes('service')) {
      return `I offer various services including:
1. Web Development (HTML, CSS, JavaScript, React, Node.js, PHP, MySQL, WordPress)
2. Graphic Design (Canva, UI/UX, Branding)
3. Digital Marketing (SEO, Social Media)
4. AI Prompt Engineering
5. Business Consulting
6. Technical Training
7. Google Advertisement Setups
8. Content Creation
9. Project Management
Which service would you like to know more about?`;
    }
    
    if (input.includes('experience') || input.includes('background')) {
      return `I have over a 10 years of collective experience in:
- Web Development: React, Node.js, WordPress
- Digital Marketing: SEO, Content Creation
- Graphic Design: UI/UX, Branding
- Business Development
- Technical Training
Would you like specific details about any area?`;
    }

    if (input.includes('previous project') || input.includes('projects')) {
      return `Here are some of my previous projects:
1. A responsive portfolio and news platform built with React and Node.js
2. A content management system (CMS) for a news website using WordPress
3. A branding and marketing campaign for a tech startup
4. An AI-powered recommendation system for a local business
Would you like to dive deeper into any of these projects?`;
    }
    
    if (input.includes('profile') || input.includes('about you')) {
      return `I am a professional with over a decade of experience in:
- Web Development
- Graphic Design
- Digital Marketing
- AI Optimization
- Content Creation
- Project Management 
I am passionate about creating innovative solutions for clients, helping businesses grow, and mentoring young professionals. If you'd like more details, feel free to ask!`;
    }

    if (input.includes('scope') || input.includes('study areas')) {
      return `I specialize in the following study areas:
1. Web Development: Full-stack, frontend and backend technologies, UI/UX design
2. Digital Marketing: SEO, social media, analytics
3. AI Optimization: ChatGPT, DALL-E, Meta, Claude etc.
4. Graphic Design: Branding, logo design, social media content
5. Business Consulting: Strategic planning, business growth, team management
Let me know which area you'd like to explore further!`;
    }

    if (input.includes('general knowledge') || input.includes('fields of study')) {
      return `I can provide insights into various fields of study, including:
- Technology and Innovation
- Business and Entrepreneurship
- Digital Transformation
- Project Management
- Marketing and Advertising
- Graphic and Web Design
- Data Entry and AI optimization 
Feel free to ask about any of these fields or any other topic you're interested in!`;
    }

    return "I'm here to help! Feel free to ask about my services, pricing, experience, or technology expertise. What would you like to know?";
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          className="fixed bottom-36 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare size={24} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 bg-indigo-600 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 p-1 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  type={message.type}
                  content={message.content}
                />
              ))}
              {isTyping && (
                <div className="text-gray-500 italic">AI is typing...</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex space-x-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
