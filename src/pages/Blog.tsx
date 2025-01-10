import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import BlogList from '../components/blog/BlogList';
import PaymentModal from '../components/payments/PaymentModal';

const Blog = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web Development', 'Artificial Intelligence', 'Programming', 'Digital Marketing'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Helmet>
        <title>Tech Blog - Latest Technology Insights</title>
        <meta name="description" content="Read the latest insights on web development, AI, and modern technology." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6">Latest Tech News</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <BlogList category={selectedCategory} searchQuery={searchQuery} />

      {showPayment && (
        <PaymentModal
          amount={25}
          type="subscription"
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            alert('Thank you for subscribing! You now have access to all content.');
          }}
        />
      )}
    </motion.div>
  );
};

export default Blog;