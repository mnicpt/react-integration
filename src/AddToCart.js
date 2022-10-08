import React from 'react';
import { Link } from 'react-router-dom';

function AddToCart() {
  const handleClick = () => {
    setTimeout(() => {
      window.location = 'https://www.paypal.com/smart/checkout/native';
    }, 900);
  }

  return (
    <>
      <h1>Add To Cart</h1>
      <Link to="/appSwitch" className="App-link appSwitch">App Switch</Link>
      <button onClick={handleClick}>Go to app</button>
    </>
  );
}

export default AddToCart;