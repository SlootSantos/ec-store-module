import React from 'react';


import '../styles/carticon/cart_icon.css';
import Icon from '../assets/coffee.svg';

function CartIcon(props) {

  let { count } = props;

  return(
    <div className="cart-icon">

      <div className="cart-icon__counter">
        { count }
      </div>

      <img src={Icon} alt=""/>

    </div>
  );
};

export default CartIcon;
