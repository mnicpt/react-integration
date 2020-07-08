import React from 'react';
import ReactDOM from 'react-dom';
import loadScript from './ScriptLoader';

export default function PayPalButtons (props) {
  let Button = window.paypal.Buttons.driver('react', { React, ReactDOM });
  Object.keys(props).forEach(prop => {
    window.paypal.Buttons[prop] = props[prop];
  })

  return (
    <Button />
  );
};

// export default loadScript(PayPalButtons);