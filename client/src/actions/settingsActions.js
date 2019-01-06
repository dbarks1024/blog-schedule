import { CHANGE_WEEKS_PAST } from './types';

export const changeWeeksPast =  (val) => {
  return({
    type: CHANGE_WEEKS_PAST,
    payload: val,
  });
};
