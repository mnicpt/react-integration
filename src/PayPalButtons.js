import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PayPalButtons () {
  const [paypalIsLoaded, setPaypalIsLoaded] = useState(window.paypal);

  let animationFrame = window.requestAnimationFrame(function loadScript() {
    if (!window.paypal) {
      window.requestAnimationFrame(loadScript);
    } else {
      setPaypalIsLoaded(true);
      window.cancelAnimationFrame(animationFrame);
    }
  }); 

  if (!paypalIsLoaded) return null;

  const PayPalButtonsComponent = window.paypal.Buttons.driver('react', { React, ReactDOM });
  return (
    <PayPalButtonsComponent />
  );
};

export default PayPalButtons;
