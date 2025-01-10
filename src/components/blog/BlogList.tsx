import React from 'react';
import { motion } from 'framer-motion';
import BlogPost from './BlogPost';
import { blogPosts } from '../../data/blogPosts';

interface BlogListProps {
  category: string;
  searchQuery: string;
}

const BlogList: React.FC<BlogListProps> = ({ category, searchQuery }) => {
  const filteredPosts = blogPosts.filter(post => 
    (category === 'All' || post.category === category) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.preview.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BlogPost post={post} />
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;