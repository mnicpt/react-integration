import React, { useEffect, useState } from 'react';
import PayPalButtons from './PayPalButtons';
import './App.css';
import { loadScript } from '@paypal/paypal-js';

function Checkout() {
  let config = {
    'client-id': 'sb',
  };

  const [scriptIsLoaded, setScriptIsLoaded] = useState(true);
  const [paypalConfig, setPaypalConfig] = useState(config);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    if (!scriptIsLoaded) {
      console.log('Loading PayPal script...', paypalConfig);
      loadScript(
        paypalConfig
      )
      .then(paypal => {
        console.log('Loaded:', JSON.stringify(paypal));
        setScriptIsLoaded(true);
      })
      .catch(err => {
        console.error(`Error found: ${JSON.stringify(err)}`);
      });
    }
  }, [scriptIsLoaded, paypalConfig]);

  const currencyChanged = () => {
    const newCurrency = document.querySelector('#currency').value;

    setCurrency(newCurrency);
    setPaypalConfig(Object.assign(paypalConfig, { currency: newCurrency }));
    setScriptIsLoaded(false);
  };

  const createOrder = (data, actions) => {
    console.log('createOrder called');
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

  console.log(`script is loaded: ${scriptIsLoaded}`);
  if (!scriptIsLoaded) return null;
  return (
      <>
        <h1>Checkout</h1>
        <section className='currencySection'>
          <label htmlFor="currency">Currency:</label>
          <input id="currency" name="currency" type="text" placeholder="Set currency" defaultValue={currency}/>
          <button className='currency' onClick={currencyChanged}>Update currency</button>
        </section>
        <div className='paypal-buttons'>
          <PayPalButtons
            enableNativeCheckout={true}
            createOrder={(data, actions) =>  createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      </>
  );
}

export default Checkout;