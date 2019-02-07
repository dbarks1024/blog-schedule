import moment from 'moment';
import { ALL_POSTS, MODAL_OPEN, SORT_BY } from './types';
import { sortPostsList } from '../blogList/_actions';

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


