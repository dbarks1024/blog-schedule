import axios from 'axios';
import ALL_BLOGS from './types';

export const getAllPosts = (dispatch) => {
  axios.get('/api/posts')
    .then((response) => {
      console.log(response.body);
      dispatch({
        payload: response.body,
        type: ALL_BLOGS
      })
    }) 
}