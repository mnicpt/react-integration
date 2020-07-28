import React, { useEffect, useState } from 'react';
import PayPalButtons from './PayPalButtons';
import './App.css';
import { loadPaypalScript } from './paypal';
import { Messages } from '@paypal/messaging-components';

function Checkout() {
  console.log(Messages);

  var _useState = useState(window.paypal),
      isLoaded = _useState[0],
      setLoaded = _useState[1];

  var paypalConfig = {
    params: {
      'client-id': 'sb',
      'currency': 'USD',
      'commit': true
    },
    attributes: {
      'data-csp-nonce': 'yo'
    },
    async: true
  };
  useEffect(function () {
    if (!isLoaded) {
      loadPaypalScript(paypalConfig).then(function (paypal) {
        console.log('Loaded:', JSON.stringify(paypal));
        setLoaded(true);
      }).catch(function (err) {
        console.error("Error found: " + JSON.stringify(err));
      });
    }
  }, [isLoaded, paypalConfig]);
  if (!isLoaded) return null;

  var _createOrder = function createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: "0.01"
        }
      }]
    });
  };

  var _onApprove = function onApprove(data, actions) {
    return actions.order.capture();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Checkout"), /*#__PURE__*/React.createElement("div", {
    className: "paypal-buttons"
  }, /*#__PURE__*/React.createElement(PayPalButtons, {
    createOrder: function createOrder(data, actions) {
      return _createOrder(data, actions);
    },
    onApprove: function onApprove(data, actions) {
      return _onApprove(data, actions);
    }
  })));
}

export default Checkout;