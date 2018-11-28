import {
  CHANGE_POST_DATA,
  CHANGE_AUTHOR,
  CHANGE_TITLE,
  CHANGE_STATUS,
  CHANGE_CATEGORY,
  CHANGE_DESCRIPTION,
  CHANGE_DATE,
  FORM_LOADING,
  CLEAR_FORM
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  author: '',
  date: '',
  status: '',
  category: '',
  description: '',
  id: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_POST_DATA:
    return {
      ...state,
      title: action.payload.title,
      author: action.payload.author,
      date: action.payload.date,
      status: action.payload.status,
      category: action.payload.category,
      description: action.payload.description,
      id: action.payload._id
    };
  case CHANGE_TITLE:
    return {
      ...state,
      title: action.payload
    };
  case CHANGE_AUTHOR:
    return {
      ...state,
      author: action.payload
    };
  case CHANGE_DATE:
    return {
      ...state,
      date: action.payload
    };
  case CHANGE_STATUS:
    return {
      ...state,
      status: action.payload
    };
  case CHANGE_CATEGORY:
    return {
      ...state,
      category: action.payload
    };
  case CHANGE_DESCRIPTION:
    return {
      ...state,
      description: action.payload
    };
  case FORM_LOADING:
    return {
      ...state,
      loading: action.payload
    };
  case CLEAR_FORM:
    return {
      ...state,
      title: '',
      author: '',
      date: '',
      status: '',
      category: '',
      description: '',
      id: '',
    };
  default:
    return state;
  }
};