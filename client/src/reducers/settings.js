import { CHANGE_WEEKS_PAST } from '../actions/types';

const initialState = {
  weeksPast: '0'
};

export default (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_WEEKS_PAST:
    console.log(action.payload);
    return { ...state, weeksPast: action.payload };
  default:
    return state;
  }
};
