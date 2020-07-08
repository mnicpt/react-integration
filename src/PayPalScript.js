import React from 'react';
import Script from './Script';

function PayPalScript(props) {
  return <Script url='https://www.paypal.com/sdk/js' {...props} />;
}

export default PayPalScript;