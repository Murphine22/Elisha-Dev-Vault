import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSuccess = () => {
    setSubmitStatus({
      type: 'success',
      message: 'Message sent successfully! I will get back to you soon.'
    });
  };

  const handleError = (error: string) => {
    setSubmitStatus({
      type: 'error',
      message: error
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Helmet>
        <title>Contact Elisha Ejimofor - Web Developer & Digital Marketer</title>
        <meta name="description" content="Get in touch with Elisha Ejimofor for web development, graphic design, and digital marketing services." />
      </Helmet>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg mb-4 ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <ContactForm 
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center"
            >
              <Mail className="text-indigo-600 mr-4" size={24} />
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:elishaejimofor@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                  elishaejimofor@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center"
            >
              <Phone className="text-indigo-600 mr-4" size={24} />
              <div>
                <h3 className="font-medium">Phone</h3>
                <a href="tel:+2348160589186" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                  (+234) 816-058-9186
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center"
            >
              <MapPin className="text-indigo-600 mr-4" size={24} />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Plot 447B, Paul Odili Crescent, Cluster 1, River Park Estate, Airport Road, Federal Capital Territory, Abuja, Nigeria
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
