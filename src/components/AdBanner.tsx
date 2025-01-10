import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ads = [
  {
    id: 1,
    title: "Master Modern Web Development",
    description: "Learn React, Node.js, and Modern JavaScript",
    bgColor: "bg-gradient-to-r from-blue-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDJ8fGVkJTIwbGVhcm5pbmd8ZW58MHx8fHwxNjI4ODMwMzI1&ixlib=rb-1.2.1&q=80&w=1920"
  },
  {
    id: 2,
    title: "AI Development Tools",
    description: "Build intelligent applications with our AI toolkit",
    bgColor: "bg-gradient-to-r from-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDR8fGFpfGVufDB8fHx8MTYyODgzMDMyNQ&ixlib=rb-1.2.1&q=80&w=1920"
  },
  {
    id: 3,
    title: "Cloud Computing Solutions",
    description: "Scale your applications with modern cloud technology",
    bgColor: "bg-gradient-to-r from-green-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDIxfGNsb3VkfGVufDB8fHx8MTYyODgzMDg1Mg&ixlib=rb-1.2.1&q=80&w=1920"
  },
  {
    id: 4,
    title: "Empowering African Startups",
    description: "Connect with investors and grow your business in Africa",
    bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDh8fGFmcmljYSUyMHN0YXJ0dXB8ZW58MHx8fHwxNjI4ODMwODcy&ixlib=rb-1.2.1&q=80&w=1920"
  },
  {
    id: 5,
    title: "Next-Gen FinTech Solutions",
    description: "Transforming financial transactions across Africa",
    bgColor: "bg-gradient-to-r from-red-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDl8fGZpbnRlY2h8ZW58MHx8fHwxNjI4ODMwNDM2&ixlib=rb-1.2.1&q=80&w=1920"
  }
];

const preloadImages = () => {
  ads.forEach(ad => {
    const img = new Image();
    img.src = ad.image;
  });
};

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    preloadImages();

    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    navigate('/Advertise');
  };

  return (
    <div className="relative w-11/12 mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAd}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`w-full ${ads[currentAd].bgColor} text-white`}
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between p-6 space-x-6">
              <motion.div
                className="relative w-48 h-28 overflow-hidden rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={ads[currentAd].image}
                  alt={ads[currentAd].title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-extrabold mb-2 drop-shadow-lg">{ads[currentAd].title}</h3>
                <p className="text-sm md:text-base">{ads[currentAd].description}</p>
              </div>
              <motion.button
                onClick={handleLearnMore}
                className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AdBanner;
