import { ALL_POSTS, MODAL_OPEN } from './types';

export const getAllPosts = () => {
  return (dispatch) => {
    fetch('/api/post')
    .then((response) => response.json())
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
