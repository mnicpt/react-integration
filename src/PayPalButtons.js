import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import loadScript from './ScriptLoader';
import PayPalScript from './PayPalScript';

function PayPalButtons () {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isReady, setIsReady] = useState(window.paypal);

  if (!isReady) {
    if (!scriptLoaded) {
      loadScript(<PayPalScript
        client-id = 'sb'
        currency = 'CAD'
        commit = {true}
        data-csp-nonce = 'yo'
      />);
      setScriptLoaded(true);
    }

    const interval = setInterval(() => {
      if (window.paypal) {
        clearInterval(interval);
        setIsReady(true);
      }
    }, 50);

    return null;
  }

  const Button = window.paypal.Buttons.driver('react', { React, ReactDOM });
  return (
    <Button />
  );
};

export default PayPalButtons;
