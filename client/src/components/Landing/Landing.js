import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation.js';

export default class Landing extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
      <div>
        <Navigation />
      </div>

    )
  }

}