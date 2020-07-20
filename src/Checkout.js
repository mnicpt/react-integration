import React, { useEffect, useState } from 'react';
import PayPalButtons from './PayPalButtons';
import './App.css';
import { paypalScript } from './paypal';

function Checkout() {
  const [isLoaded, setLoaded] = useState(window.paypal);
  const paypalConfig = {
    params: {
      'client-id': 'sb',
      'currency': 'USD',
      'commit': true,
    },
    attributes: {
      'data-csp-nonce': 'yo'
    }
  };

  useEffect(() => {
    if (!isLoaded) {
      paypalScript(
        paypalConfig
      )
      .then(paypal => {
        console.log('Loaded:', JSON.stringify(paypal));
        setLoaded(true);
      })
      .catch(err => {
        console.error(`Error found: ${JSON.stringify(err)}`);
      });
    }
  }, [isLoaded, paypalConfig]);

  if (!isLoaded) return null;

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