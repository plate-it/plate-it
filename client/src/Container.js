import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation/Navigation';

const Container = (props) => {
  return (
    <div>
      <Navigation />
      { props.children }
    </div>
  );
}

export default connect(state => state)(Container);