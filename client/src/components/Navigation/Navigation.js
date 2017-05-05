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
            Collections
          </Link>
          <div
            className='right-profile-container'
          >
            <img
              src={profile.picture}
              alt={'profile'}
              className='profile-image'
            />
            <div
              className='profile-name'
            >
              {profile.name}
            </div>
            <div>
              <button
                onClick={logout}
                className='logout button empty'
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='title-container'
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