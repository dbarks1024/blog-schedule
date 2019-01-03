import { combineReducers } from 'redux';
import postReducer from './post';
import changePostForm from './changePostForm';
import blogListReducer from './blogList';

export default combineReducers({
  postReducer,
  postForm: changePostForm,
  blogListReducer,
});