import { combineReducers } from 'redux';
import postReducer from './post';
import changePostForm from './changePostForm';
import blogListReducer from '../blogList/_reducers';
import settings from './settings';

export default combineReducers({
  postReducer,
  postForm: changePostForm,
  blogListReducer,
  settings,
});