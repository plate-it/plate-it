import React, { Component } from 'react';
import Title from './Title';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

export default class Recipe extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
      <div>
        Recipes
        <Title />
        <Ingredients />
        <Instructions />
      </div>
    )
  }

}