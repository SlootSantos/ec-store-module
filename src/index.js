import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

// import App from './container/App';
import LandingPage from './container/landing_page';
import ProductPage from './container/product_page';
import CheckoutPage from './container/checkout_page';
import Cart from './container/cart';
// import header && footer
import Header from './components/header';
import Footer from './components/footer';

import reducers from './reducers/index';

import './config/sdk_config';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render virutal-dom into DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header></Header>

        <div className="switch_content">
          <Switch>
            <Route path="/shop/checkout" component={ CheckoutPage }></Route>
            <Route path="/shop/cart" component={ Cart }></Route>
            <Route path="/shop/:product-:id" component={ ProductPage }></Route>
            <Route path="/" component={ LandingPage }></Route>
          </Switch>
        </div>


        <Footer></Footer>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'));
  registerServiceWorker();
