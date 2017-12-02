import React from 'react';
import { withRouter } from 'react-router-dom';
import manualClearProcessCart from '../actions/clear_cart';
import { getCart } from '../actions/get_cart';

import '../styles/checkoutpage/checkoutpage.css';


const CheckoutSuccess = withRouter(({ history, location }) => {
  const regexp = /(?=reason=paypal)\w+/g;
  if (location.search.match(regexp)) {
    const locationQuery = location.search.split(/[?&]/g);
    const params = {};
    locationQuery.forEach((i) => {
      const keyPair = i.split('=');

      if (keyPair.length > 1) {
        const key = keyPair[0];
        const val = keyPair[1];
        params[key] = val;
      }
    });

    manualClearProcessCart(params)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      getCart();
      history.push('/');
    });
  }

  return (
    <div className="checkout content payment__success">
      <div>
        <h1>Alles hat geklappt!</h1>
        <span>Danke für Deine Bestellung :)</span>
      </div>
    </div>
  );
});


export default CheckoutSuccess;
