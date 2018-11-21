import { ALL_POSTS, MODAL_OPEN, CHANGE_POST_DATA } from './types';

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

export const changePostData = (post) => {
  return {
    type: CHANGE_POST_DATA,
    payload: post
  }
}
