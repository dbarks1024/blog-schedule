import { SORT_BY } from './types';


export const changeSortBy = (type) => {
  return {
    type: SORT_BY,
    payload: type
  }; 
};


