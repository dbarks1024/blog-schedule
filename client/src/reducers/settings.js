import { CHANGE_WEEKS_PAST, CHANGE_WEEKS_FUTURE } from '../actions/types';

const initialState = {
  weeksPast: '0',
  weeksFuture: '10',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_WEEKS_PAST:
    return { ...state, weeksPast: action.payload };
  case CHANGE_WEEKS_FUTURE:
    return { ...state, weeksFuture: action.payload };
  default:
    return state;
  }
};
