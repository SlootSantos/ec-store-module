import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import LandingPage from './components/landing_page';
import App from './container/App';

import reducers from './reducers/index';

import './config/sdk_config'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render virutal-dom into DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/land" component={ LandingPage }></Route>
          <Route path="/" component={ App }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'));
  registerServiceWorker();
