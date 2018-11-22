import {
  CHANGE_POST_DATA,
  CHANGE_AUTHOR,
  CHANGE_TITLE,
  CHANGE_STATUS,
  CHANGE_CATEGORY,
  CHANGE_DESCRIPTION,
  CHANGE_DATE
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  author: '',
  date: '',
  status: '',
  category: '',
  description: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_POST_DATA:
      return {
        ...state,
        title: action.payload.title,
        author: action.payload.author,
        date: action.payload.date,
        status: action.payload.status,
        category: action.payload.category,
        description: action.payload.description,
      }
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload
      }
    case CHANGE_AUTHOR:
      return {
        ...state,
        author: action.payload
      }
    case CHANGE_DATE:
      return {
        ...state,
        date: action.payload
      }
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.payload
      }
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      }
    default:
      return state
  }
}