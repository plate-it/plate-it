import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation.js';
import Auth from '../Auth/Auth.js'; 

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
        className='wrapper height'
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
          <Auth />
        </section>
        <section 
          className='landing-features'
        >
          <article
            className='feature container'
          >
            <h3
              className='feature-headers'
            >Uniform Styles</h3>
            <p
              className='feature-text'
            >Use the inline text editor to create your recipe layout without worrying about presentation.</p>
          </article>
          <article
            className='feature container'
          >
            <h3
              className='feature-headers'
            >Organize</h3>
            <p
              className='feature-text'
            >Your recipes are placed in books that can be given titles to reflect the theme of the collection.</p>
          </article>
          <article
            className='feature container'
          >
            <h3
              className='feature-headers'
            >Distribute</h3>
            <p
              className='feature-text'
            >Share your recipes with friends and family on social media, or with sharable links.</p>
          </article>
        </section>
      </div>
    )
  }

}