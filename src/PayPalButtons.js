import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function PayPalButtons ({ params, attributes }) {
  const PayPalButtonsComponent = window.paypal.Buttons.driver('react', { React, ReactDOM });
  return (
    <PayPalButtonsComponent />
  );
};

export default PayPalButtons;
