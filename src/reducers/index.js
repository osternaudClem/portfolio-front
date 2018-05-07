import { combineReducers } from 'redux';
import blog from './blog';
import user from './user';

export default combineReducers({
  blog,
  user,
});
