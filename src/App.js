import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import AddToCart from './AddToCart';
import AppSwitch from './AppSwitch';
import Checkout from './Checkout';
import { loadScript } from './paypal.js';

function App() {
  loadScript('https://www.paypal.com/sdk/js', { // http://localhost.paypal.com:8000/sdk/js
    params: {
      // 'client-id': 'AYLa6UCw47Baut1LJ3TojVJBDe8ZkzAutZjWP7fVOCafaJ8em97GrHFW7EJXKcMjGcueM-R_AFa-cadq' //localhost
      'client-id': 'sb' // sandbox
    },
    attributes: {}
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
          <Route 
            path="/appSwitch"
            render={(props) => (
              <AppSwitch {...props} latency={500} />
            )} />
        </Switch>
        <Link to="/" className="App-link">Home</Link>
        <Link to="/addToCart" className="App-link">Add to Cart</Link>
        <Link to="/checkout" className="App-link">Checkout</Link>
      </header>
    </div>
  );
}

export default App;
