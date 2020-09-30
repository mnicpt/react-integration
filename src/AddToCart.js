import React from 'react';
import { Link } from 'react-router-dom';

function AddToCart() {
  return (
    <>
      <h1>Add To Cart</h1>
      <Link to="/appSwitch" className="App-link appSwitch">App Switch</Link>
    </>
  );
}

export default AddToCart;