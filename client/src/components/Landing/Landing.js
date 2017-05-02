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
      <div
        className='wrapper'
      >
        <section
          className='landing-banner container'
        >
          <h2
            className='landing-header'
          >The last cook book you'll ever need</h2>
          <h3
            className='landing-description'
          >Create and manage all of your recipes in one place.</h3>
        </section>
        <section 
          className='landing-features'
        >
          <article
            className='feature container'
          >
            <p
              className='feature-text'
            >Create uniform formatted recipes with the inline text editor.</p>
          </article>
          <article
            className='feature container'
          >
            <p
              className='feature-text'
            >Organize your recipes in books that can be given titles to reflect the theme of the collection.</p>
          </article>
          <article
            className='feature container'
          >
            <p
              className='feature-text'
            >Share your recipes with friends and families on social media, or with sharable links.</p>
          </article>
        </section>

      </div>
    )
  }

}