import { ALL_POSTS } from '../actions/types';

const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case ALL_POSTS:
   console.log(action.payload);
    return {
      ...state, 
     posts: action.payload
    }
   default:
    return state
  }
 }