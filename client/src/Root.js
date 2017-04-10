import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import Recipe from './components/Recipe/Recipe';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Recipe}>
      </Route>
    </Router>
  </Provider>;

export default Root;