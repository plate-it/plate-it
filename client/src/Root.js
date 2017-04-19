import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import Recipe from './components/Recipe/Recipe';
import Landing from './components/Landing/Landing.js';
import Collections from './components/Collections/Collections.js';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Landing} />
      <Route path='/recipe' component={Recipe} />
      <Route path='collections' component={Collections} />
    </Router>
  </Provider>;

export default Root;