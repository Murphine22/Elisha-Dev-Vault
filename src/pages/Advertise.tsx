import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AdSetup from '../components/ads/AdSetup';

const Advertise = () => {
  const [showAdSetup, setShowAdSetup] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <Helmet>
        <title>Advertise - Elisha Ejimofor</title>
        <meta name="description" content="Create and manage your advertisements effectively" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Advertise With Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Reach your target audience effectively with our strategic advertising solutions
        </p>
        <button
          onClick={() => setShowAdSetup(true)}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Create New Advertisement
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Basic Package</h3>
          <p className="text-3xl font-bold mb-4">$50<span className="text-sm text-gray-500">/week</span></p>
          <ul className="space-y-2 mb-6">
            <li>Standard visibility</li>
            <li>Basic analytics</li>
            <li>7 days duration</li>
          </ul>
          <button
            onClick={() => setShowAdSetup(true)}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Get Started
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-indigo-600">
          <h3 className="text-xl font-semibold mb-4">Premium Package</h3>
          <p className="text-3xl font-bold mb-4">$180<span className="text-sm text-gray-500">/month</span></p>
          <ul className="space-y-2 mb-6">
            <li>Enhanced visibility</li>
            <li>Detailed analytics</li>
            <li>30 days duration</li>
            <li>Priority support</li>
          </ul>
          <button
            onClick={() => setShowAdSetup(true)}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Get Started
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Package</h3>
          <p className="text-3xl font-bold mb-4">Custom</p>
          <ul className="space-y-2 mb-6">
            <li>Tailored visibility</li>
            <li>Advanced analytics</li>
            <li>Flexible duration</li>
            <li>Dedicated support</li>
            <li>Custom targeting</li>
          </ul>
          <button
            onClick={() => setShowAdSetup(true)}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Contact Us
          </button>
        </div>
      </div>

      {showAdSetup && <AdSetup onClose={() => setShowAdSetup(false)} />}
    </motion.div>
  );
};

export default Advertise;