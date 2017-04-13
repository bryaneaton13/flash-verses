
import { combineReducers } from 'redux';

import auth from './auth';
import drawer from './drawer';
import navigation from './navigation';
import verses from './verses';

export default combineReducers({
  auth,
  drawer,
  navigation,
  verses,
});
