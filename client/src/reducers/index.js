import { combineReducers } from 'redux';
import changePostForm from '../postModal/_reducer';
import blogListReducer from '../blogList/_reducer';
import settings from '../settings/_reducer';

export default combineReducers({
  postForm: changePostForm,
  blogListReducer,
  settings,
});