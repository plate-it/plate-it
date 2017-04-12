import React from 'react';
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
        <p>Check out our amazing app!</p>
      </div>
    )
  }

}