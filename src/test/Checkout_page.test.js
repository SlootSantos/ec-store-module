import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';

import CheckoutPage from '../container/checkout_page';

test('render CheckoutPage', () => {
  it('renders entire CheckoutPage', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <CheckoutPage />
        </StaticRouter>
        ), div
      );
  });
});
