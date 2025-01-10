import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

interface ContactPaymentProps {
  onSuccess: () => void;
}

const ContactPayment: React.FC<ContactPaymentProps> = ({ onSuccess }) => {
  return (
    <div className="space-y-6">
      <p className="text-gray-600 dark:text-gray-300">
        Contact me directly to discuss custom payment arrangements:
      </p>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone size={20} className="text-indigo-600" />
          <a href="tel:+2348160589186" className="hover:text-indigo-600">
            (+234) 816-058-9186
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Mail size={20} className="text-indigo-600" />
          <a href="mailto:elishaejimofor@gmail.com" className="hover:text-indigo-600">
            elishaejimofor@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <MessageSquare size={20} className="text-indigo-600" />
          <a
            href="https://wa.me/2348160589186"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <button
        onClick={onSuccess}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        I've Made Contact
      </button>
    </div>
  );
};

export default ContactPayment;