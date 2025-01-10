import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Building2, Coins, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CryptoPayment from './payments/CryptoPayment';
import CardPayment from './payments/CardPayment';
import BankTransfer from './payments/BankTransfer';

interface PaymentOptionsProps {
  amount: number;
  onClose: () => void;
  onSuccess: () => void;
  type: 'subscription' | 'advertisement';
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ amount, onClose, onSuccess, type }) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const navigate = useNavigate();

  const paymentMethods = [
    { id: 'card', name: 'Card Payment', icon: <CreditCard size={24} /> },
    { id: 'crypto', name: 'Cryptocurrency', icon: <Coins size={24} /> },
    { id: 'bank', name: 'Bank Transfer', icon: <Building2 size={24} /> },
    { id: 'contact', name: 'Contact for Options', icon: <Phone size={24} /> },
  ];

  const handleMethodSelect = (methodId: string) => {
    if (methodId === 'contact') {
      const subject = encodeURIComponent(`Payment Inquiry - ${type}`);
      const body = encodeURIComponent(`Hi Elisha,\n\nI'm interested in discussing payment options for ${type} (Amount: $${amount}).\n\nBest regards`);
      window.location.href = `/contact?email=elishaejimofor@gmail.com&subject=${subject}&body=${body}`;
      onClose();
    } else {
      setSelectedMethod(methodId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {type === 'subscription' ? 'Complete Subscription' : 'Complete Advertisement Payment'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Amount to pay: ${amount}
        </p>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <motion.button
              key={method.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMethodSelect(method.id)}
              className={`w-full p-4 flex items-center justify-between rounded-lg border ${
                selectedMethod === method.id
                  ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center">
                {method.icon}
                <span className="ml-3">{method.name}</span>
              </div>
              {selectedMethod === method.id && (
                <div className="w-4 h-4 rounded-full bg-indigo-600" />
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedMethod && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6"
            >
              {selectedMethod === 'card' && (
                <CardPayment amount={amount} onSuccess={onSuccess} />
              )}
              {selectedMethod === 'crypto' && (
                <CryptoPayment amount={amount} onSuccess={onSuccess} />
              )}
              {selectedMethod === 'bank' && (
                <BankTransfer amount={amount} onSuccess={onSuccess} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PaymentOptions;