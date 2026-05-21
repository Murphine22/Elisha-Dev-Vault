import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: string }>>([
    {
      type: 'bot',
      content: "Hi! I'm Elisha's AI assistant. I can help you learn about his full-stack development skills, backend expertise, services, projects, and more. How can I assist you today?"
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

    const response = generateResponse(userMessage.toLowerCase());
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (input: string): string => {
    if (input.includes('backend') || input.includes('node') || input.includes('express') || input.includes('api') || input.includes('server')) {
      return `Elisha is a trained backend developer with expertise in:
- Node.js & Express.js for building REST APIs
- MongoDB & Mongoose ODM for database design
- TypeScript for type-safe server-side development
- JWT Authentication & bcrypt password hashing
- MVC Architecture & middleware design
- CRUD operations with input validation & error handling
- API testing with Postman

He completed intensive backend training at TS Academy (Phoenix Cohort) where he built production-ready APIs including a Student Record CRUD API and an LMS Capstone Project. Want to know more about his projects or training?`;
    }

    if (input.includes('frontend') || input.includes('react') || input.includes('javascript') || input.includes('css') || input.includes('html')) {
      return `Elisha's frontend skills include:
- React.js for building dynamic user interfaces
- TypeScript for type-safe development
- JavaScript (ES6+) for interactive web applications
- Tailwind CSS & Bootstrap for responsive styling
- HTML5 & CSS3 for semantic markup
- Framer Motion for animations
- Responsive design for all screen sizes

He combines these with his backend skills to deliver complete full-stack web applications. Would you like to see his projects?`;
    }

    if (input.includes('full-stack') || input.includes('full stack') || input.includes('fullstack')) {
      return `Elisha is a Full-Stack Developer who builds complete web applications end-to-end:

Frontend: React, TypeScript, Tailwind CSS, JavaScript, Bootstrap
Backend: Node.js, Express.js, REST APIs, TypeScript
Database: MongoDB, Mongoose ODM, MySQL
Auth: JWT tokens, bcrypt, role-based access control
DevOps: Git/GitHub, Vercel deployment, npm
Architecture: MVC pattern, middleware, clean code

He trained at TS Academy to master the backend stack, complementing his years of frontend experience. What aspect would you like to know more about?`;
    }

    if (input.includes('database') || input.includes('mongodb') || input.includes('mysql') || input.includes('mongoose')) {
      return `Elisha's database expertise includes:
- MongoDB with Mongoose ODM for NoSQL databases
- MySQL for relational databases
- Data modeling & schema design
- CRUD operations with proper indexing
- Database relationships & references
- Input validation at the database level
- Query optimization for performance

He designed and built database schemas for multiple projects including the Student Record API and LMS Capstone at TS Academy. Need details about a specific project?`;
    }

    if (input.includes('authentication') || input.includes('jwt') || input.includes('auth') || input.includes('security')) {
      return `Elisha implements robust authentication & security:
- JWT (JSON Web Token) based authentication
- bcrypt password hashing for secure storage
- Role-based access control (RBAC)
- Middleware-level security checks
- Input validation & sanitization
- CORS configuration
- Error handling that doesn't leak sensitive info
- Security best practices for production APIs

These skills were refined during his TS Academy backend training. Want to know about his services?`;
    }

    if (input.includes('ts academy') || input.includes('training') || input.includes('certification') || input.includes('education') || input.includes('phoenix')) {
      return `Elisha completed the Backend Development Program at TS Academy (Phoenix Cohort) in 2025. The training covered:
- Node.js & Express.js for server-side development
- MongoDB & Mongoose for database management
- TypeScript for type-safe backend code
- REST API design & architecture
- JWT authentication & security
- MVC pattern & middleware design
- API testing with Postman
- Git workflow & deployment

Key projects from the training:
1. Student Record CRUD API - Full REST API with validation
2. LMS Capstone Project - Collaborative team project
3. TS Academy Capstone Project (Group 1) - Backend group project

Would you like to know about his other experience?`;
    }

    if (input.includes('project') || input.includes('portfolio') || input.includes('work')) {
      return `Here are Elisha's notable projects:

Backend Projects:
1. Student Record API - CRUD REST API with Node.js, Express, MongoDB
2. LMS Capstone Project - Backend with database design & API architecture
3. TS Academy Capstone - Collaborative backend group project

Full-Stack Projects:
4. Eli-Pay Fintech App - Payment integration & user authentication
5. CampusLink App - Student networking with real-time features
6. Cosmos Explorer - Space exploration app with API integration

Frontend Projects:
7. Daily Gist News Website - News platform with API integration
8. This Portfolio (Elisha Dev Vault) - React + TypeScript + Tailwind CSS

All projects are available on GitHub: github.com/Murphine22
Which project would you like to learn more about?`;
    }

    if (input.includes('price') || input.includes('cost') || input.includes('pricing') || input.includes('rate')) {
      return `Here are Elisha's service pricing details:
- Backend API Development: Starting from $1,200
- Full-Stack Web Development: Starting from $1,500
- Frontend Web Development: Starting from $1,000
- Database Design & Management: Starting from $800
- Graphic Design: Starting from $500
- Digital Marketing: Starting from $800/month
- AI Prompt Engineering: Custom pricing based on project
- Training/Mentorship: $50/hour

All prices are negotiable based on project scope. Would you like to discuss a specific service?`;
    }
    
    if (input.includes('contact') || input.includes('reach') || input.includes('hire') || input.includes('email') || input.includes('phone')) {
      return `You can reach Elisha through:
- Email: elishaejimofor@gmail.com
- Phone: (+234) 816-058-9186
- WhatsApp: Available via the button on the bottom right
- GitHub: github.com/Murphine22
- Location: Abuja, Nigeria

You can also use the Contact page on this website. How would you prefer to connect?`;
    }
    
    if (input.includes('service')) {
      return `Elisha offers comprehensive full-stack services:

Backend & API Services (NEW):
1. Backend API Development - REST APIs with Node.js & Express
2. Full-Stack Web Development - Complete web applications
3. Database Design & Management - MongoDB/MySQL solutions
4. Authentication & Security - JWT, bcrypt, RBAC

Frontend & Design:
5. Frontend Web Development - React, TypeScript, Tailwind CSS
6. Graphic Design & Branding - UI/UX, logos, marketing materials

Digital & Marketing:
7. Digital Marketing - SEO, social media, content strategy
8. AI Prompt Engineering - ChatGPT, DALL-E optimization
9. Content Creation - Blog posts, copywriting
10. Social Media Advertisement - Paid ads, audience targeting

Training & Consulting:
11. Digital Skills Tutoring - Web dev, design, marketing training
12. Business Consulting - Digital transformation, growth strategy

Which service interests you?`;
    }
    
    if (input.includes('experience') || input.includes('background') || input.includes('career') || input.includes('journey')) {
      return `Elisha's professional journey:

2025: Backend Development Trainee - TS Academy (Phoenix Cohort)
  → Node.js, Express, MongoDB, TypeScript, REST APIs, JWT Auth

2024-2025: Digital Specialist & Instructor - Murphine Technologies
  → Trained developers in web dev, design, SEO, AI prompting

2024: Web Developer - Periscope Consulting
  → React, Tailwind CSS, API integration, 40% performance improvement

2024: Junior Frontend Developer - OS Concept Solutions
  → HTML/CSS/JS, SEO, AI prompts, graphic design

2019-2024: Affiliate Marketer - Timoyex Int'l
  → Solar energy marketing, 30% conversion rate improvement

2017-2022: Business Developer - Forgo Battery Company Ltd
  → Branch management, 35% revenue increase

Want to know about specific skills or projects?`;
    }

    if (input.includes('skill') || input.includes('tech') || input.includes('stack') || input.includes('tool')) {
      return `Elisha's technical skills across 6 categories:

Frontend: HTML5, CSS3/Tailwind, JavaScript (ES6+), React.js, TypeScript, Bootstrap
Backend: Node.js, Express.js, TypeScript (Server), REST API Design, PHP, API Integration
Database & Auth: MongoDB, Mongoose ODM, MySQL, JWT Authentication, Database Design, Data Modeling
DevOps & Tools: Git/GitHub, Postman, VS Code, Vercel, npm, WordPress
Architecture: MVC Pattern, CRUD Operations, Middleware Design, Error Handling, Input Validation, Security
Digital: SEO, Content Creation, Social Media Ads, AI Prompt Engineering, Graphic Design, UI/UX

Which area would you like to explore?`;
    }

    if (input.includes('profile') || input.includes('about') || input.includes('who') || input.includes('elisha')) {
      return `Elisha Ejimofor is a Full-Stack Web Developer, Graphic Designer, and Digital Marketer based in Abuja, Nigeria, with over a decade of collective experience.

He recently completed intensive backend training at TS Academy (Phoenix Cohort), mastering Node.js, Express.js, MongoDB, TypeScript, JWT authentication, and REST API design.

His expertise spans:
- Full-Stack Development (Frontend + Backend)
- Database Engineering (MongoDB, MySQL)
- Authentication & Security (JWT, bcrypt)
- Graphic Design & UI/UX
- Digital Marketing & SEO
- AI Prompt Engineering
- Content Creation & Training

He's passionate about building innovative solutions and mentoring aspiring developers. Want to know about his services or projects?`;
    }

    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('greet')) {
      return `Hello! Welcome to Elisha's portfolio. I can help you with:
- His backend & full-stack development skills
- Projects he's built (APIs, web apps, etc.)
- Services and pricing
- His TS Academy training & certifications
- Contact information
- Experience & background

What would you like to know?`;
    }

    if (input.includes('scope') || input.includes('study areas') || input.includes('specializ')) {
      return `Elisha specializes in:

1. Full-Stack Development: React frontend + Node.js/Express backend
2. Backend Engineering: REST APIs, databases, authentication
3. Database Management: MongoDB, Mongoose, MySQL, data modeling
4. Digital Marketing: SEO, social media, content strategy
5. AI Optimization: ChatGPT, DALL-E, Claude, Meta AI
6. Graphic Design: Branding, logo design, UI/UX
7. Business Consulting: Strategic planning, digital transformation
8. Technical Training: Web development, design, marketing

Let me know which area you'd like to explore further!`;
    }

    if (input.includes('general knowledge') || input.includes('fields of study')) {
      return `Elisha can provide insights into various fields, including:
- Full-Stack Web Development (Frontend + Backend)
- Backend Architecture & API Design
- Database Engineering & Data Modeling
- Technology and Innovation
- Business and Entrepreneurship
- Digital Transformation
- Project Management
- Marketing and Advertising
- Graphic and Web Design
- AI Optimization & Prompt Engineering

Feel free to ask about any of these fields!`;
    }

    return "I'd love to help! You can ask me about:\n- Backend skills (Node.js, Express, MongoDB, JWT)\n- Frontend skills (React, TypeScript, Tailwind)\n- Full-stack development\n- Projects & portfolio\n- TS Academy training\n- Services & pricing\n- Contact information\n- Experience & background\n\nWhat would you like to know?";
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
                  placeholder="Ask about skills, projects, services..."
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
