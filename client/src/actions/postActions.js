import { ALL_POSTS } from './types';

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