import React from 'react';
import { Link } from 'react-router';

const DynamicNav = ({ profile, logout }) => {
  return (
    <nav
      className='nav logged-nav'
    >
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
            <Link
              to='/'
              onClick={logout}
              className='logout button empty link'
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DynamicNav;