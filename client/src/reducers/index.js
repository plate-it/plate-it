import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from '../components/Auth/reducers';

const appReducer = combineReducers({
  auth,
  routing: routerReducer,
});

export default (state, action) =>
  appReducer(state, action);

