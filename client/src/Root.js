import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import Recipe from './components/Recipe/Recipe';
import Landing from './components/Landing/Landing.js';
// import Collection from './components/Collection/Collection.js';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Landing} />
      <Route path="/recipe" component={Recipe} />
    </Router>
  </Provider>;

export default Root;