import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import CardPayment from './CardPayment';
import BankTransfer from './BankTransfer';
import ContactPayment from './ContactPayment';

interface PaymentModalProps {
  amount: number;
  onClose: () => void;
  onSuccess: () => void;
  type: 'subscription' | 'advertisement';
}

const PaymentModal: React.FC<PaymentModalProps> = ({ amount, onClose, onSuccess, type }) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card' },
    { id: 'bank', name: 'Bank Transfer' },
    { id: 'contact', name: 'Contact for Other Options' },
  ];

  const renderPaymentMethod = () => {
    switch (selectedMethod) {
      case 'card':
        return <CardPayment amount={amount} onSuccess={onSuccess} />;
      case 'bank':
        return <BankTransfer amount={amount} onSuccess={onSuccess} />;
      case 'contact':
        return <ContactPayment onSuccess={onSuccess} />;
      default:
        return null;
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
        initial={{ scale: 0.95 }}
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

        <div className="mb-6">
          <p className="text-lg">Amount: ${amount}</p>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full p-4 text-left rounded-lg border transition-colors ${
                selectedMethod === method.id
                  ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {method.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedMethod && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6"
            >
              {renderPaymentMethod()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PaymentModal;