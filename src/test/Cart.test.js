import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';

import Cart from '../container/cart';


test('renders cart page', () => {
  it('renders entire cart page', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <Cart />
        </StaticRouter>
        ), div
      );
  });
});
