import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PayPalButtons(props) {
  var _useState = useState(window.paypal),
      paypalIsLoaded = _useState[0],
      setPaypalIsLoaded = _useState[1];

  var start;
  var animationFrame = window.requestAnimationFrame(function loadScript(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var elapsed = timestamp - start;

    if (elapsed > 5000) {
      console.warn('Must load PayPal JS SDK prior to using PayPalButtons.');
      return null;
    }

    if (!window.paypal) {
      window.requestAnimationFrame(loadScript);
    } else {
      console.log("Time for script ready: " + elapsed + "ms");
      setPaypalIsLoaded(true);
      window.cancelAnimationFrame(animationFrame);
    }
  });
  if (!paypalIsLoaded) return null;
  var PayPalButtonsComponent = window.paypal.Buttons.driver('react', {
    React: React,
    ReactDOM: ReactDOM
  });
  return /*#__PURE__*/React.createElement(PayPalButtonsComponent, props);
}

;
export default PayPalButtons;