import React, { Component } from 'react';

export default class Collections extends Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
      <div>
        Here, we will show the collections of books or recipes.
      </div>
    )
  }

}