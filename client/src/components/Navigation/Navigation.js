import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../Auth/Auth.js';

export default class Navigation extends Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
      <div>
        <IndexLink to='/' style={{padding: 10}}>Landing</IndexLink>
        <Auth />
        <Link to='/recipe' style={{padding: 10}}>Create Recipe</Link>
        <Link to='/collections' style={{padding: 10}}>View Collections</Link>
      </div>
    )
  }

}