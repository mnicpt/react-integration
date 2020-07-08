import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import AddToCart from './AddToCart';
import Checkout from './Checkout';
import PayPalScript from './ScriptLoader';

function App() {
  PayPalScript.load({
    'client-id': 'sb',
    'currency': 'CAD',
    'commit': true,
    'data-csp-nonce': 'yo'
  });

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
