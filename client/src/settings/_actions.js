import { CHANGE_WEEKS_PAST, CHANGE_WEEKS_FUTURE } from '../actions/types';

export const changeWeeksPast =  (val) => {
  if(!isNaN(val) && val.length <= 2 ) {
    return({
      type: CHANGE_WEEKS_PAST,
      payload: val,
    });
  }
  return {
    type: 'cancel'
  };
};

export const changeWeeksFuture =  (val) => {
  if(!isNaN(val) && val.length <= 2 ) {
    return({
      type: CHANGE_WEEKS_FUTURE,
      payload: val,
    });
  }
  return {
    type: 'cancel'
  };
};
