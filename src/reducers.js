import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import routerReducer from './containers/Router/reducer';

const appReducer = combineReducers({
  form,
  ...routerReducer
});

export default (state, action) => {
  return appReducer(state, action);
};
