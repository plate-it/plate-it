import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import Login from './Login.js';
import Home from './Home.js';
import Auth0 from '../../config/auth0.js';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idToken: null,
      profile: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock(Auth0.CLIENT_ID, Auth0.DOMAIN, {
      auth: {
        responseType: 'token'
      }
    });

    // Check if ID Token already on local storage
    var token = this.getToken();
    if (token) {
      this._doAuthentication.call(this, {idToken: token});
    }

    // add callback for lock 'authenticated' event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
  }

  _doAuthentication(authResult) {
    // saves the user token to local storage and state
    localStorage.setItem('id_token', authResult.idToken);
    this.setState({
      idToken: authResult.idToken
    });
    this.setProfile(authResult.idToken);
  }

  setProfile(idToken) {
    this.lock.getProfile(idToken, (err, profile) => {
      if (err) {
        console.log('Error loading profile:', err);
        return;
      }
      this.setState({
        profile: profile
      });
    });
  }

  login() {
    // call the show method to display the widget
    this.lock.show()
  }

  loggedIn() {
    // checks for a saved token and if it's valid
    return !!this.getToken();
  }

  getToken() {
    // retrieves the user token from local storage
    return localStorage.getItem('id_token');
  }

  logout() {
    // clear user token and profile data from local storage and state
    localStorage.removeItem('id_token');
    this.setState({
      idToken: null,
      profile: null
    });
  }

  render() {
    return (
      <Login login={this.login} />
    );
  }
}