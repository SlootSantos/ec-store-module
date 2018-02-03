import React from 'react';
import PropTypes from 'prop-types';


import '../styles/carticon/cart_icon.css';
import Icon from '../assets/coffee.svg';

function CartIcon(props) {
  const { count } = props;

  return (
    <div className="cart-icon">

      <div className="cart-icon__counter">
        { count }
      </div>

      <img src={Icon} alt="" />

    </div>
  );
}

CartIcon.propTypes = {
  count: PropTypes.number.isRequired
};

export default CartIcon;
