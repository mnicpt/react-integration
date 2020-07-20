import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import AddToCart from './AddToCart';
import Checkout from './Checkout';
import { paypalScript } from './paypal';

function App() {
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

  // useEffect(() => {
  //   paypalScript(
  //     paypalConfig
  //   )
  //   .then(paypal => {
  //     // do stuff after load
  //     console.log('Loaded', paypal);
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
        <Link to="/">Home</Link>
        <Link to="/addToCart">Add to Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </header>
    </div>
  );
}

export default App;
