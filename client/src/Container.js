import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import Auth0 from './config/auth0.js';
import Auth0Lock from 'auth0-lock';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idToken: null,
      profile: null
    };

    this.logout = this.logout.bind(this);

    this.lock = new Auth0Lock(Auth0.CLIENT_ID, Auth0.DOMAIN, {
      auth: {
        responseType: 'token'
      }
    });
  }

  componentWillMount() {
    // Check if ID Token already on local storage
    const token = localStorage.getItem('id_token');

    if (token) {
      console.log(`token was found`);
      this._doAuthentication.call(this, {idToken: token});
    }

    // add callback for lock 'authenticated' event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
  }

  _doAuthentication(authResult) {
    // saves the user token to local storage and state
    try {
      localStorage.setItem('id_token', authResult.idToken);  
    } catch (e) {
      console.log(`Error writing to local storage: ${e}`);
      return;
    }
    
    this.setState({
      idToken: authResult.idToken
    });

    this.setProfile(authResult.idToken);
  }

  setProfile(idToken) {
    this.lock.getProfile(idToken, (err, profile) => {
      if (err) {
        console.log(`Error loading profile: ${err}`);
        return;
      }
      this.setState({
        profile: profile
      });
    });
  }

  logout() {
    // clear user token and profile data from local storage and state
    localStorage.removeItem('id_token');
    this.setState({
      idToken: null,
      profile: null
    });
  }

  render () {
    return (
      <div>
        <Navigation 
          profile={this.state.profile}
          logout={this.logout}
        />
        { this.props.children }
      </div>
    );
  }
}

export default connect(state => state)(Container);