import { ALL_POSTS, MODAL_OPEN } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  modalOpen: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_POSTS:
      return {
        ...state, 
      posts: action.payload
      }
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: action.payload
      }
   default:
    return state
  }
 }