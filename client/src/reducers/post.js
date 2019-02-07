import { DATE_RANGE } from '../actions/types';

const INITIAL_STATE = {
  dateRange: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

  case DATE_RANGE:
    return {
      ...state,
      dateRange: action.payload
    };
  default:
    return state;
  }
};