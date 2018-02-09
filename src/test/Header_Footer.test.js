import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';


import Header from '../container/header';
import Footer from '../components/footer';

test('render header and footer', () => {
  it('renders header', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <Header />
        </StaticRouter>
        ), div
      );
  });

  it('renders footer', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <Footer />
        </StaticRouter>
        ), div
      );
  });
});
