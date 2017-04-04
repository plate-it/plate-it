import Auth0Lock from 'auth0-lock';
import {browserHistory} from 'react-router';

export default class AuthService {
  constructor(clientId, domain) {
    // configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3001/login',
        responseType: 'token'
      }
    });
    // add callback for lock 'authenticated' event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    // saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home route
    browserHistory.replace('/home');
  }

  login() {
    // call the show method to display the widget
    this.lock.show()
  }

  loggedIn() {
    // checks for a saved token and if it's valid
    return !!this.getToken();
  }

  setToken(idToken) {
    // saves user token to local storage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // retrieves the user token from local storage
    return localStorage.getItem('id_token');
  }

  logout() {
    // clear user token and profile data from local storage
    localStorage.remoteItem('id_token');
  }
}