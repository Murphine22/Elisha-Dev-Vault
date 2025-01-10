import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Building2, Coins, CircleDollarSign } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import ReactGA from 'react-ga4';

const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLIC_KEY!);

interface PaymentModalProps {
  planId: string;
  amount: number;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ planId, amount, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          amount,
          paymentMethod,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret);

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Track successful payment
      ReactGA.event({
        category: 'Payment',
        action: 'Successful Payment',
        value: amount,
      });

      // Handle successful payment
      alert('Payment successful! You now have access to premium content.');
      onClose();
    } catch (err: any) {
      setError(err.message);
      
      // Track failed payment
      ReactGA.event({
        category: 'Payment',
        action: 'Failed Payment',
        label: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6">Complete Payment</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <div className="mb-6">
          <p className="text-gray-600">Amount to pay: ${amount}</p>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="font-semibold">Select Payment Method:</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-4 border rounded-lg flex items-center ${
                paymentMethod === 'card' ? 'border-indigo-600' : ''
              }`}
            >
              <CreditCard className="mr-2" /> Card
            </button>
            <button
              onClick={() => setPaymentMethod('bank')}
              className={`p-4 border rounded-lg flex items-center ${
                paymentMethod === 'bank' ? 'border-indigo-600' : ''
              }`}
            >
              <Building2 className="mr-2" /> Bank Transfer
            </button>
            <button
              onClick={() => setPaymentMethod('crypto')}
              className={`p-4 border rounded-lg flex items-center ${
                paymentMethod === 'crypto' ? 'border-indigo-600' : ''
              }`}
            >
              <Coins className="mr-2" /> Crypto
            </button>
            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`p-4 border rounded-lg flex items-center ${
                paymentMethod === 'paypal' ? 'border-indigo-600' : ''
              }`}
            >
              <CircleDollarSign className="mr-2" /> PayPal
            </button>
          </div>
        </div>

        {paymentMethod && (
          <form onSubmit={handlePayment} className="space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
            >
              {loading ? 'Processing...' : 'Complete Payment'}
            </button>
          </form>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PaymentModal;