import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import AddToCart from './AddToCart';
import Checkout from './Checkout';
import PayPalScript from './PayPalScript';

function App() {
  const params = {
    currency: 'CAD',
    commit: true
  };

  const attributes = {
    'data-csp-nonce': 'yo'
  };

  return (
    <div className="App">
      <PayPalScript
        clientId='sb'
        params={params}
        attrs={attributes}
      />
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
