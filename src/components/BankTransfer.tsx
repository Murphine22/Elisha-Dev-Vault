import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BankTransferProps {
  amount: number;
  onSuccess: () => void;
}

const BankTransfer: React.FC<BankTransferProps> = ({ amount, onSuccess }) => {
  const [transferDetails, setTransferDetails] = useState({
    name: '',
    reference: '',
    date: '',
  });

  const bankDetails = {
    bankName: 'Fidelity Bank',
    accountName: 'Elisha Ejimofor',
    accountNumber: '6323451063',
    sortCode: '18-50-08',
    swift: 'FIDTNGLA',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement transfer verification logic here
    console.log('Verifying transfer:', transferDetails);
    onSuccess();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
        <h3 className="font-semibold mb-2">Bank Details</h3>
        <div className="space-y-2 text-sm">
          <p>Bank: {bankDetails.bankName}</p>
          <p>Account Name: {bankDetails.accountName}</p>
          <p>Account Number: {bankDetails.accountNumber}</p>
          <p>Sort Code: {bankDetails.sortCode}</p>
          <p>SWIFT/BIC: {bankDetails.swift}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            value={transferDetails.name}
            onChange={(e) => setTransferDetails({ ...transferDetails, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Transfer Reference</label>
          <input
            type="text"
            value={transferDetails.reference}
            onChange={(e) => setTransferDetails({ ...transferDetails, reference: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Transfer Date</label>
          <input
            type="date"
            value={transferDetails.date}
            onChange={(e) => setTransferDetails({ ...transferDetails, date: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Confirm Transfer
        </button>
      </form>
    </motion.div>
  );
};

export default BankTransfer;