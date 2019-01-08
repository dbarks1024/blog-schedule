import moment from 'moment';
import { ALL_POSTS, MODAL_OPEN, SORT_BY, DATE_RANGE } from './types';
import { sortPostsList } from './blogListActions';

export const getAllPosts = () => {
  return (dispatch) => {
    fetch('/api/post', {cache: 'no-cache'})
      .then((response) => response.json())
      .then((response) => {
        return response.map((post) => {
          post.date = moment(post.date).format('YYYY-MM-DD');
          return post;
        });
      })
      .then((response) => {
        console.log(response);
        dispatch({
          payload: response,
          type: ALL_POSTS
        });
        dispatch(sortPostsList());
      }); 
  };
};

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

export const getDateRange = () => {
  return (dispatch, getState) => {
    const currentTuesday =  moment().day('tuesday');
    const weeksFuture = Number(getState().settings.weeksFuture);
    const weeksPast = Number(getState().settings.weeksPast);
    const firstTuesday = (moment(currentTuesday).subtract(weeksPast, 'week') );
    const totalWeeks = weeksFuture + weeksPast;
    
    let datesArray = [];
    for (let i = 0; i <= totalWeeks - 1; i++) {
      datesArray.push(moment(firstTuesday).add(i, 'week').format('MM/DD/YYYY'));
    }
    dispatch({
      type: DATE_RANGE,
      payload: datesArray
    }); 
  };
};
