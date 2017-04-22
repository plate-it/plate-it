import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../Auth/Auth.js';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigation extends Component {
  constructor(props) {
    super (props);
    this.state = {
      something: 'something'
    }

  }

  render () {
    return (
     <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Plate It</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}><Link to="/recipe">Recipes</Link></NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} >Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }

}
// <div>
//   <IndexLink to='/' style={{padding: 10}}>Landing</IndexLink>
//   <Auth />
//   <Link to='/recipe' style={{padding: 10}}>Create Recipe</Link>
//   <Link to='/collections' style={{padding: 10}}>View Collections</Link>
// </div>