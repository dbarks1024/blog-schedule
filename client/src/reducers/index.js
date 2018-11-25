import { combineReducers } from 'redux';
import postReducer from './post';
import changePostForm from './changePostForm';

export default combineReducers({
  postReducer,
  postForm: changePostForm
});