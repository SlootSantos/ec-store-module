import React from 'react';

import { addToCart } from '../actions/add_cart';

import '../styles/add_cart.css';

function AddCartButton(props) {
  let { prodId } = props;

  return (
    <div>
      <button onClick={() => addToCart(prodId)} className="button__add_cart">In den Warenkorb</button>
    </div>
  );
};

export default AddCartButton;
