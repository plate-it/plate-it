import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Navigation = ({ profile, logout }) => {
  return (
    <nav
      className={profile ? 'nav logged-nav' : 'landing-nav'}
    >
      { profile ? (
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
          <div>Welcome back {profile.name}</div>
          <button
            onClick={logout}
            className='login button empty'
          >
            Log out
          </button>
        </div>
      ) : (
        <div
          className='link-container'
        >
          <h2
            className='landing-title'
          >
            Plate-It
          </h2>
        </div>
      )}
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