import { ALL_POSTS, MODAL_OPEN } from './types';
import moment from 'moment';

export const getAllPosts = () => {
  return (dispatch) => {
    fetch('/api/post', {cache: "no-cache"})
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
      })
    }) 
  }
}

export const setModalOpen = (bool) => {
  return {
    type: MODAL_OPEN,
    payload: bool
  }
}
