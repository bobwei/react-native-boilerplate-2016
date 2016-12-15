import { combineReducers } from 'redux';

import authReducer from '../modules/auth/reducers';

export default combineReducers({
  user: authReducer,
});
