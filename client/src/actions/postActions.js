import { MODAL_OPEN, SORT_BY } from './types';

export const setModalOpen = (bool) => {
  return {
    type: MODAL_OPEN,
    payload: bool
  };
};

export const changeSortBy = (type) => {
  return {
    type: SORT_BY,
    payload: type
  }; 
};


