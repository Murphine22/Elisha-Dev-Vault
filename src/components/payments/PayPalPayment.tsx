import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalPaymentProps {
  amount: number;
  onSuccess: () => void;
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({ amount, onSuccess }) => {
  return (
    <div className="space-y-4">
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                  currency_code: 'USD'
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (actions.order) {
            await actions.order.capture();
            onSuccess();
          }
        }}
        style={{ layout: 'vertical' }}
      />
    </div>
  );
};

export default PayPalPayment;