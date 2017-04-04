import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {browserHistory} from 'react-router';
import makeRoutes from './views/Main/routes';

const routes = makeRoutes();

ReactDOM.render(
  <App history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
