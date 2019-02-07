import { combineReducers } from 'redux';
import postReducer from './post';
import changePostForm from '../postForm/_reducer';
import blogListReducer from '../blogList/_reducer';
import settings from '../settings/_reducer';

export default combineReducers({
  postReducer,
  postForm: changePostForm,
  blogListReducer,
  settings,
});