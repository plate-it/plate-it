import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation.js';

export default class Landing extends Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
      <div>
        <p>Check out our amazing app!</p>
      </div>
    )
  }

}