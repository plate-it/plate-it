import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from '../components/Auth/reducers';

const appReducer = combineReducers({
  auth,
});

export default (state, action) => {

  return appReducer(state, action);
};