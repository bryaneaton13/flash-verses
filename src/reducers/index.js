
import { combineReducers } from 'redux';

import auth from './auth';
import verses from './verses';

export default combineReducers({
  auth,
  verses,
});
