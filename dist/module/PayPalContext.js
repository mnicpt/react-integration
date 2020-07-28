import React from 'react';
var paypalConfig = {
  params: {
    'client-id': 'sb',
    'currency': 'USD',
    'commit': true
  },
  attributes: {
    'data-csp-nonce': 'yo'
  }
};
export var PayPalScriptConfig = React.createContext(paypalConfig);