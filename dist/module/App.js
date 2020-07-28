import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import AddToCart from './AddToCart';
import Checkout from './Checkout';
import { loadPaypalScript } from './paypal';

function App() {
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
  useEffect(function () {
    loadPaypalScript(paypalConfig).then(function (paypal) {
      // do stuff after load
      console.log('Loaded', paypal);
    }).catch(function (err) {// handle error
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.js"), " and save to reload."), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React"), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/addToCart",
    component: AddToCart
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/checkout",
    component: Checkout
  })), /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "App-link"
  }, "Home"), /*#__PURE__*/React.createElement(Link, {
    to: "/addToCart",
    className: "App-link"
  }, "Add to Cart"), /*#__PURE__*/React.createElement(Link, {
    to: "/checkout",
    className: "App-link"
  }, "Checkout")));
}

export default App;