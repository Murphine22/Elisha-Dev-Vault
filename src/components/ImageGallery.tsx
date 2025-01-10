import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://i.pinimg.com/236x/cf/ca/f5/cfcaf563a55e9a0ebb01893448473a59.jpg',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  'https://i.pinimg.com/474x/4b/0e/2b/4b0e2b4c967ed625e7c7c1ae05743ced.jpg',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  'https://i.pinimg.com/474x/31/ea/04/31ea04192956f7c8259437d927bdf18b.jpg',
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  'https://i.pinimg.com/474x/14/c9/7e/14c97e9ebbcefeb2c22b298bcb3ae655.jpg',
  'https://i.pinimg.com/474x/bb/5a/aa/bb5aaa0e35c2065592e14a66bf65df2a.jpg',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  'https://i.pinimg.com/474x/a2/03/97/a20397082fc6d98261e54e2431e2508c.jpg',
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full grid place-items-center overflow-hidden">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Interactive Slideshow"
        initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotateY: -45 }}
        whileHover={{
          scale: 1.1,
          rotateZ: 5,
          boxShadow: '0px 10px 20px rgba(0,0,0,0.3)',
        }}
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="w-3/4 h-3/4 object-cover rounded-2xl cursor-pointer"
        style={{
          perspective: '1000px',
        }}
      />
    </div>
  );
};

export default ImageGallery;
