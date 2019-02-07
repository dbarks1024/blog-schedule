import { ALL_POSTS, MODAL_OPEN, CHANGE_POST_DATA, SORT_BY, DATE_RANGE } from '../actions/types';
import { DATE_ASC } from '../consts';

const INITIAL_STATE = {
  posts: [],
  modalOpen: false,
  changePostData: {},
  sortBy: DATE_ASC,
  dateRange: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ALL_POSTS:
    return {
      ...state, 
      posts: action.payload
    };
  case MODAL_OPEN:
    return {
      ...state,
      modalOpen: action.payload
    };
  case CHANGE_POST_DATA:
    return {
      ...state,
      changePostData: action.payload
    };
  case SORT_BY:
    return {
      ...state,
      sortBy: action.payload 
    };
  case DATE_RANGE:
    return {
      ...state,
      dateRange: action.payload
    };
  default:
    return state;
  }
};