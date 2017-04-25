import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types'
import Auth from '../Auth/Auth.js';
import { Menu, Segment } from 'semantic-ui-react';

export default class Navigation extends Component {

  render () {
    return (
     <Segment color="blue" inverted>
      <Menu color="blue" inverted borderless>
        <Menu.Item
          as={Link}
          to="/"
        >
          Plate-It
        </Menu.Item>
        <Menu.Item as={Link} to='/recipe' color="green" name="Create Recipe" />
        <Menu.Item as={Link} to='/collections' color="green" name="View Collections" />
      </Menu>
    </Segment>
    )
  }

}
// <div>
//   <IndexLink to='/' style={{padding: 10}}>Landing</IndexLink>
//   <Auth />
//   <Link to='/recipe' style={{padding: 10}}>Create Recipe</Link>
//   <Link to='/collections' style={{padding: 10}}>View Collections</Link>
// </div>