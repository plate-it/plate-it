import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = (state, ownProps) => {
  let location = '';
  if (state.routing.locationBeforeTransitions !== null) {
    location = state.routing.locationBeforeTransitions.pathname;
  }
  const { id } = state.auth.loggedInUser;

  return { location, id };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

export default NavigationContainer;

