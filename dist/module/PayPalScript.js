import React, { useEffect, useState } from 'react';
import { paypalScript } from './paypal';

function PayPalScript(_ref) {
  var params = _ref.params,
      attributes = _ref.attributes;

  var _useState = useState(window.paypal),
      isLoaded = _useState[0],
      setLoaded = _useState[1];

  useEffect(function () {
    paypalScript(params, attributes).then(function () {
      setLoaded(true);
    });
  });
  if (!isLoaded) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}

export default PayPalScript;