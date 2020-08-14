import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import AddToCart from './AddToCart';
import Checkout from './Checkout';
import { loadScript } from './paypal';

function App() {
  // const paypalConfig = {
  //   params: {
  //     'client-id': 'sb',
  //     'currency': 'USD',
  //     'commit': true,
  //   },
  //   attributes: {
  //     'data-csp-nonce': 'yo',
  //     'data-page-type': 'home'
  //   },
  //   async: true
  // };

  // useEffect(() => {
  //   console.log('Load JS SDK async');
  //   loadScript(
  //     'https://www.paypal.com/sdk/js',
  //     paypalConfig
  //   )
  //   .then(paypal => {
  //     // do stuff after load
  //     console.log('Loaded JS SDK async', paypal);
  //   })
  //   .catch(err => {
  //     // handle error
  //   });

  //   const checkoutConfig = Object.assign(paypalConfig, { async: false });
  //   console.log('Load three.js defer');
  //   loadScript(
  //     'https://unpkg.com/three@0.119.1/build/three.js',
  //     checkoutConfig
  //   )
  //   .then(paypal => {
  //     // do stuff after load
  //     console.log('Loaded three.js defer', paypal);
  //   })
  //   .catch(err => {
  //     // handle error
  //   });
  // });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Switch>
          <Route path="/addToCart" component={AddToCart}/>
          <Route path="/checkout" component={Checkout}/>
        </Switch>
        <Link to="/" className="App-link">Home</Link>
        <Link to="/addToCart" className="App-link">Add to Cart</Link>
        <Link to="/checkout" className="App-link">Checkout</Link>
      </header>
    </div>
  );
}

export default App;
