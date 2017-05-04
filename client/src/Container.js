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
  }

  componentWillMount() {
    this.lock = new Auth0Lock(Auth0.CLIENT_ID, Auth0.DOMAIN, {
      auth: {
        responseType: 'token'
      }
    });

    // Check if ID Token already on local storage
    const token = localStorage.getItem('id_token');
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

  render () {
    return (
      <div>
        <Navigation 
          profile={this.state.profile}
        />
        { this.props.children }
      </div>
    );
  }
}

export default connect(state => state)(Container);