import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import { LandingPage } from './container/landing_page';
import Impressum from './container/impressum';
import AGB from './container/agb';
import ProductPage from './container/product_page';
import CheckoutPage from './container/checkout_page';
import Cart from './container/cart';
import CheckoutSuccess from './components/checkout_success';
import CheckoutFail from './components/checkout_fail';
import PP from './components/pp_return';
// import header && footer
import Header from './container/header';
import Footer from './components/footer';

import reducers from './reducers/index';

import './config/sdk_config';
import './styles/index.css';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render virutal-dom into DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />

        <div className="switch_content">
          <Switch>
            <Route path="/agb" component={AGB} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/shop/checkout/success" component={CheckoutSuccess} />
            <Route path="/shop/checkout/fail" component={CheckoutFail} />
            <Route path="/shop/checkout/pp/success" component={PP} />
            <Route path="/shop/checkout/pp/fail" component={CheckoutFail} />
            <Route path="/shop/checkout" component={CheckoutPage} />
            <Route path="/shop/cart" component={Cart} />
            <Route path="/shop/:product-:id" component={ProductPage} />
            <Route path="/*" component={LandingPage} />
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
  registerServiceWorker();
