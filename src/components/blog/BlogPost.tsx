import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    category: string;
    preview: string;
    image: string;
    author: string;
    date: string;
    likes: number;
    bookmarks: number;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <motion.img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
      />
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-indigo-600 text-white">
          {post.category}
        </span>
        <h2 className="text-xl font-bold mt-2 mb-2 hover:text-indigo-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {post.preview}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
            >
              <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <MessageCircle size={18} />
              <span>{Math.floor(Math.random() * 50)}</span>
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-1 ${isBookmarked ? 'text-indigo-600' : 'text-gray-500'}`}
            >
              <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
          <button className="text-gray-500 hover:text-indigo-600">
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;