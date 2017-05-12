import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import Auth0 from './config/auth0.js';
import Auth0Lock from 'auth0-lock';
import DynamicNav from './components/Navigation/DynamicNav.js';
import StaticNav from './components/Navigation/StaticNav.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idToken: null,
      profile: null
    };

    this.logout = this.logout.bind(this);
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

      const payload = JSON.stringify(profile);

      this.postPayload(payload);
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

  postPayload (payload) {
    const init = {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type' : 'application/json',
      },
    };

    fetch('http://localhost:3000/api/user', init)
      .then((response) => console.log(`User response ok? ${response.ok}`))
      .catch((error) => console.log(error));
  }

  render () {
    return (
      <div>
        {this.state.profile ? ( 
          <DynamicNav
            profile={this.state.profile}
            logout={this.logout}
          />
        ) : (
          <StaticNav />
        )}
        { this.props.children }
      </div>
    );
  }
}

export default connect(state => state)(Container);