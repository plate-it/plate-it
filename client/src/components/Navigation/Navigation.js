import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Auth from '../Auth/Auth.js';

const Navigation = ({ profile }) => {
  return (
    <nav>
      <div
        className='link-container'
      >
        <Link
          to='/'
          className='link nav-link'
        >
          Plate-It
        </Link>
        <Link
          to='/recipe'
          className='link nav-link'
        >
          Create Recipe
        </Link>
        <Link
          to='/collections'
          className='link nav-link'
        >
          View Collections
        </Link>
        {profile ? (<div>here: {profile.name}</div>) : `Sign in!`}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  let location = '';
  if (state.routing.locationBeforeTransitions !== null) {
    location = state.routing.locationBeforeTransitions.pathname;
  }
  return { location };
};

export default connect(mapStateToProps)(Navigation);