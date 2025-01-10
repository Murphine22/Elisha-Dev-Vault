import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 3,
    period: 'month',
    features: [
      'Access to all blog posts',
      'Monthly newsletter',
      'Comment on articles',
      'Download resources'
    ]
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: 10,
    period: 'quarter',
    features: [
      'All Monthly features',
      'Priority access to new content',
      'Exclusive quarterly webinars',
      'Direct message support'
    ]
  },
  {
    id: 'annual',
    name: 'Annual',
    price: 25,
    period: 'year',
    features: [
      'All Quarterly features',
      'Two months free',
      'One-on-one consultation',
      'Early access to new features'
    ]
  }
];

const SubscriptionPlans = () => {
  const { user } = useAuth();

  const handleSubscribe = (planId: string) => {
    if (!user) {
      alert('Please log in to subscribe');
      return;
    }
    window.location.href = '/contact';
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Subscribe to Access Premium Content
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best suits your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="ml-1 text-xl text-gray-500">/{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Contact for Subscription
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;