import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'halogen/BounceLoader';

import '../styles/overlay/payment_overlay.css';
import Logo from '../assets/vo_coffee_logo_white.svg';

function PaymentOverlay(props) {
  const { method } = props;
  return (
    <div className="payment_overlay">
      <div className="payment_spinner">
        <img src={Logo} alt={method} />
        <Loader className="payment_loader" color="white" size="32px" margin="10px" />
        <span>Zahlung wird verarbeitet</span>
      </div>
    </div>
  );
}

PaymentOverlay.propTypes = {
  method: PropTypes.string
};

PaymentOverlay.defaultProps = {
  method: 'sepa'
};


export default PaymentOverlay;
