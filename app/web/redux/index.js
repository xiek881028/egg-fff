import { combineReducers } from 'redux';

export default combineReducers({
  csrf: (state = '', action) => state,
  url: (state = '', action) => state,
  mode: (state = 'spa', action) => state,
});
