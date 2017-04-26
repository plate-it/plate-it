import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Auth from '../Auth/Auth.js';
import { Menu, Segment } from 'semantic-ui-react';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { location } = this.props;
    return (
     <Segment color="blue" inverted>
      <Menu color="blue" inverted >
        <Menu.Item
          as={Link}
          to="/"
          active={location ==='/'}
        >
          Plate-It
        </Menu.Item>
        <Menu.Item as={Link} to='/recipe' color="green" name="Create Recipe" active={location ==='/recipe'}/>
        <Menu.Item as={Link} to='/collections' color="green" name="View Collections" active={location ==='/collections'} />
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

// <div>
//   <IndexLink to='/' style={{padding: 10}}>Landing</IndexLink>
//   <Auth />
//   <Link to='/recipe' style={{padding: 10}}>Create Recipe</Link>
//   <Link to='/collections' style={{padding: 10}}>View Collections</Link>
// </div>