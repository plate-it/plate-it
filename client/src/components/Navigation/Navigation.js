import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Auth from '../Auth/Auth.js';
import { Menu, Segment } from 'semantic-ui-react';
import DynamicNav from './DynamicNav';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { location } = this.props;
    return (
     <Segment color="blue" inverted>
      <Menu color="blue" inverted >
        <Menu.Item as={Link} to="/" active={location ==='/'}>
          Plate-It
        </Menu.Item>
        <Menu.Item as={Link} to='/recipe' color="green" name="Create Recipe" active={location === '/recipe'}/>
        <Menu.Item as={Link} to='/collections' color="green" name="View Collections" active={location === '/collections'} />
        <DynamicNav />
      </Menu>
    </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  let location = '';
  if (state.routing.locationBeforeTransitions !== null) {
    location = state.routing.locationBeforeTransitions.pathname;
  }
  return { location };
};

export default connect(mapStateToProps)(Navigation);