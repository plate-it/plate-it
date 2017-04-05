import React, { Component } from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
      <div>Recipes</div>
    )
  }

}