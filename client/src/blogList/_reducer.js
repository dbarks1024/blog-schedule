import { BLOG_LIST_DATA, SORTED_POSTS_LIST, ALL_POSTS, SORT_BY } from '../actions/types';
import { DATE_ASC } from '../consts';

const INITIAL_STATE = {
  posts: [],
  sortBy: DATE_ASC,
  dateRange: [],
  blogListData: [],
  sortedPostsList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case BLOG_LIST_DATA:
    return {
      ...state, 
      blogListData: action.payload
    };
  case ALL_POSTS:
    return {
      ...state, 
      posts: action.payload
    };
  case SORT_BY:
    return {
      ...state,
      sortBy: action.payload 
    };
  case SORTED_POSTS_LIST:
    return {
      ...state,
      sortedPostsList: action.payload
    };
  default:
    return state;
  }
};