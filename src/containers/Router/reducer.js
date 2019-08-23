import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

export const storeName = 'router';

const initialState = fromJS({
  location: null,
  breadcrumbs: [],
  currentPage: null
});

const onLocationChange = (state, payload) => {
  return state
    .set('location', payload)
    .set('breadcrumbs', payload.pathname === '/' ? [''] : payload.pathname.split('/'));
};

export default {
  [storeName]: (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case LOCATION_CHANGE:
        return onLocationChange(state, payload);
      default:
        return state;
    }
  }
};
