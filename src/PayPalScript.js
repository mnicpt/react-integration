import React, { useEffect, useState } from 'react';
import { paypalScript } from './paypal';

function PayPalScript({ params, attributes }) {
  const [isLoaded, setLoaded] = useState(window.paypal);
  
  useEffect(() => {
    paypalScript(
      params,
      attributes
    )
    .then(() => {
      setLoaded(true);
    });
  });

  if (!isLoaded) return null;

  return <></>;
}

export default PayPalScript;