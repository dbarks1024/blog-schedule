import { SORT_BY, DATE_RANGE } from '../actions/types';
import { DATE_ASC } from '../consts';

const INITIAL_STATE = {
  posts: [],
  sortBy: DATE_ASC,
  dateRange: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

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