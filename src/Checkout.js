import React, { useEffect, useState } from 'react';
import PayPalButtons from './PayPalButtons';
import './App.css';
import { loadScript } from './paypal';
// import { Messages } from '@paypal/messaging-components';

function Checkout() {
  // console.log(Messages);
  let config = {
    params: {
      'client-id': 'sb',
      'currency': 'USD',
      'commit': true,
      'components': 'buttons'
    },
    attributes: {
      'data-csp-nonce': 'yo'
    },
    async: true
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
    setPaypalConfig(Object.assign(paypalConfig, { params: { ...paypalConfig.params, currency: newCurrency, components: 'buttons,messages' }}));
    setScriptIsLoaded(false);
  };

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

  console.log(`script is loaded: ${scriptIsLoaded}`);
  if (!scriptIsLoaded) return null;
  return (
      <>
        <h1>Checkout</h1>
        <label htmlFor="currency">Currency:</label>
        <input id="currency" name="currency" type="text" placeholder="Set currency" defaultValue={currency}/>
        <button onClick={currencyChanged}>Update currency</button>
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