import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import AuthService from './../../utils/AuthService';
import Container from './Container';
import Home from './Home/Home';
import Login from './Login/Login';

const auth = new AuthService('2s7rH2c2l8PyUC0pt21U1dCFRX0ETrHb', 'aautem.auth0.com');
console.log('*** Routes Auth ***', auth);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({pathname: '/login'});
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  );
}

export default makeMainRoutes;