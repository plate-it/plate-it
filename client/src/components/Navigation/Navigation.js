import React, { Component } from 'react';
import Link from 'react-router';

export default class Navigation extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
      <div>
        <Link to='/'>Landing</Link>
        <Link to='/recipe'>Create Recipe</Link>
      </div>
    )
  }

}