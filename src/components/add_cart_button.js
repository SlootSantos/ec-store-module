import React, { Component } from 'react';

import { addToCart } from '../actions/add_cart';

import '../styles/add_cart.css';

class AddCartButton extends Component {

  render() {
  let { prodId } = this.props;
    return (
      <div>
        <button onClick={() => addToCart(prodId)} className="button__add_cart">In den Warenkorb</button>
      </div>
    );
  }
}

export default AddCartButton;
