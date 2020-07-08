import React from 'react';
import ReactDOM from 'react-dom';

export default function PayPalButtons (props) {
  let Button = window.paypal.Buttons.driver('react', { React, ReactDOM });

  return (
    <Button />
  );
};
