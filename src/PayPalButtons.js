import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PayPalButtons (props) {
  const [paypalIsLoaded, setPaypalIsLoaded] = useState(window.paypal && window.paypal.Buttons);

  let start;
  let animationFrame = window.requestAnimationFrame(function loadScript(timestamp) {
    if (!start) {
      start = timestamp;
    }

    const elapsed = timestamp - start;
    if (elapsed > 5000) {
      console.warn('Must load PayPal JS SDK prior to using PayPalButtons.');
      return null;
    }

    if (!window.paypal) {
      window.requestAnimationFrame(loadScript);
    } else {
      console.log(`Time for script ready: ${elapsed}ms`);
      setPaypalIsLoaded(true);
      window.cancelAnimationFrame(animationFrame);
    }
  }); 

  if (!paypalIsLoaded) return null;

  const PayPalButtonsComponent = window.paypal.Buttons.driver('react', { React, ReactDOM });
  return (
    <PayPalButtonsComponent {...props} />
  );
};

export default PayPalButtons;
