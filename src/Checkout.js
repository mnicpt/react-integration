import React, { useEffect, useState } from 'react';
import PayPalButtons from './PayPalButtons';
import './App.css';
import { paypalScript } from './paypal';

function Checkout() {
  const [isLoaded, setLoaded] = useState(window.paypal);
  
  useEffect(() => {
    paypalScript(
      {
      'client-id': 'sb',
      'currency': 'USD',
      'commit': true,
      },
      {
        'data-csp-nonce': 'yo'
      }
    )
    .then(() => {
      setLoaded(true);
    });
  });

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  if (!isLoaded) return null;
  
  return (
      <>
        <h1>Checkout</h1>
        <div className='paypal-buttons'>
          <PayPalButtons
            createOrder={(data, actions) =>  createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      </>
  );
}

export default Checkout;