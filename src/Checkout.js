import React from 'react';
import PayPalButtons from './PayPalButtons';

function Checkout() {
  const params = {
    currency: 'CAD',
    commit: true
  };

  const attributes = {
    'data-csp-nonce': 'yo'
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
      <>
        <h1>Checkout</h1>
        <PayPalButtons
          clientId='sb'
          params={params}
          attrs={attributes}
          createOrder={(data, actions) =>  createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </>
  );
}

export default Checkout;