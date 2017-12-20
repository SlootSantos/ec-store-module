import React from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/checkoutpage/checkoutpage.css';


const CheckoutFail = withRouter(({ history }) => {
  setTimeout(() => {
    history.push('/shop/checkout');
  }, 3000);
  return (
    <div className="checkout content payment__success">
      <div>
        <h1>Das hat leider nicht funktioniert!!</h1>
        <span>Probiere es nochmal!</span>
      </div>
    </div>);
});

export default CheckoutFail;
