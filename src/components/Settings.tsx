import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon, Moon, Sun, LogOut, MessageSquare, BarChart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import AdSetup from './ads/AdSetup';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 measurement ID

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [showAdsForm, setShowAdsForm] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    // Track page views
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const toggleSettings = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await logout();
      ReactGA.event({
        category: 'User',
        action: 'Logout',
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const handleAnalyticsClick = () => {
    setShowAnalytics(true);
    ReactGA.event({
      category: 'Settings',
      action: 'View Analytics',
    });
  };

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={toggleSettings}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <SettingsIcon size={24} />
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl z-50 min-w-[200px]"
          >
            <div className="space-y-3">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={toggleTheme}
                className="flex items-center w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </motion.button>

              {user && (
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={handleAnalyticsClick}
                  className="flex items-center w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BarChart size={20} />
                  <span className="ml-2">Analytics</span>
                </motion.button>
              )}

              {user && (
                <>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setShowAdsForm(true)}
                    className="flex items-center w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <MessageSquare size={20} />
                    <span className="ml-2">Setup Ads</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={handleLogout}
                    className="flex items-center w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                  >
                    <LogOut size={20} />
                    <span className="ml-2">Logout</span>
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAdsForm && <AdSetup onClose={() => setShowAdsForm(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Settings;
