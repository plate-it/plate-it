import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

//Once we have the auth stuff running, put the links for the component into the Menu.Items like Navigation.js
const DynamicNav = ({ loggedIn }) => {
  if (!loggedIn) {
    return (
      <Menu.Menu position="right">
        <Menu.Item>Sign Up</Menu.Item>
        <Menu.Item>Log In</Menu.Item>
      </Menu.Menu>
    );
  } else {
    return (
      <Menu.Menu position="right">
        <Menu.Item>Placeholder for logged in</Menu.Item>
      </Menu.Menu>
    );
  }
}

export default DynamicNav;