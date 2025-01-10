import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, DollarSign, Calendar, Target } from 'lucide-react';
import PaymentModal from '../payments/PaymentModal';

interface AdSetupProps {
  onClose: () => void;
}

const AdSetup: React.FC<AdSetupProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [adDetails, setAdDetails] = useState({
    title: '',
    description: '',
    image: '',
    budget: '',
    duration: '7',
    targetAudience: '',
  });
  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    onClose();
    alert('Advertisement setup completed successfully!');
  };

  const calculateTotal = () => {
    const baseRate = 50; // Base rate per week
    const duration = parseInt(adDetails.duration);
    return baseRate * (duration / 7);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6"
      >
        <h2 className="text-2xl font-bold mb-6">Setup Your Advertisement</h2>

        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center ${
                  stepNumber < step ? 'text-green-500' : 
                  stepNumber === step ? 'text-indigo-600' : 'text-gray-400'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                  ${stepNumber <= step ? 'border-indigo-600' : 'border-gray-300'}`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-full h-1 mx-2 ${
                    stepNumber < step ? 'bg-indigo-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Advertisement Title</label>
                <input
                  type="text"
                  value={adDetails.title}
                  onChange={(e) => setAdDetails({ ...adDetails, title: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={adDetails.description}
                  onChange={(e) => setAdDetails({ ...adDetails, description: e.target.value })}
                  className="w-full p-2 border rounded"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={adDetails.image}
                    onChange={(e) => setAdDetails({ ...adDetails, image: e.target.value })}
                    className="flex-1 p-2 border rounded"
                    placeholder="Enter image URL"
                  />
                  <button
                    type="button"
                    className="p-2 bg-gray-100 rounded"
                  >
                    <Image size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Daily Budget ($)</label>
                <div className="relative">
                  <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={adDetails.budget}
                    onChange={(e) => setAdDetails({ ...adDetails, budget: e.target.value })}
                    className="w-full pl-10 p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Duration (Days)</label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={adDetails.duration}
                    onChange={(e) => setAdDetails({ ...adDetails, duration: e.target.value })}
                    className="w-full pl-10 p-2 border rounded"
                  >
                    <option value="7">1 Week</option>
                    <option value="14">2 Weeks</option>
                    <option value="30">1 Month</option>
                    <option value="90">3 Months</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Target Audience</label>
                <div className="relative">
                  <Target size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={adDetails.targetAudience}
                    onChange={(e) => setAdDetails({ ...adDetails, targetAudience: e.target.value })}
                    className="w-full pl-10 p-2 border rounded"
                    placeholder="e.g., Tech enthusiasts, age 25-40"
                    required
                  />
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Summary</h3>
                <p>Total Cost: ${calculateTotal()}</p>
                <p>Duration: {adDetails.duration} days</p>
              </div>
            </motion.div>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Complete Setup
              </button>
            )}
          </div>
        </form>

        {showPayment && (
          <PaymentModal
            amount={calculateTotal()}
            type="advertisement"
            onClose={() => setShowPayment(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default AdSetup;