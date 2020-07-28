import React from 'react';

const paypalConfig = {
  params: {
    'client-id': 'sb',
    'currency': 'USD',
    'commit': true,
  },
  attributes: {
    'data-csp-nonce': 'yo'
  }
};

export const PayPalScriptConfig = React.createContext(paypalConfig);
