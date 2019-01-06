import { CHANGE_WEEKS_PAST, CHANGE_WEEKS_FUTURE } from './types';

export const changeWeeksPast =  (val) => {
  return({
    type: CHANGE_WEEKS_PAST,
    payload: val,
  });
};

export const changeWeeksFuture =  (val) => {
  return({
    type: CHANGE_WEEKS_FUTURE,
    payload: val,
  });
};
