import React from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';

interface CryptoPaymentProps {
  amount: number;
  onSuccess: () => void;
}

const CryptoPayment: React.FC<CryptoPaymentProps> = ({ amount, onSuccess }) => {
  const btcAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';
  const ethAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Bitcoin (BTC)</h3>
        <div className="flex justify-center mb-2">
          <QRCode value={btcAddress} size={150} />
        </div>
        <p className="text-sm break-all bg-gray-100 dark:bg-gray-700 p-2 rounded">
          {btcAddress}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Ethereum (ETH)</h3>
        <div className="flex justify-center mb-2">
          <QRCode value={ethAddress} size={150} />
        </div>
        <p className="text-sm break-all bg-gray-100 dark:bg-gray-700 p-2 rounded">
          {ethAddress}
        </p>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Please send the equivalent of ${amount} in BTC or ETH to one of the addresses above.
      </p>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onSuccess}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        I've Completed the Payment
      </motion.button>
    </div>
  );
};

export default CryptoPayment;