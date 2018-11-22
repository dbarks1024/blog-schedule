import {
  CHANGE_TITLE,
  CHANGE_AUTHOR,
  CHANGE_DATE,
  CHANGE_STATUS,
  CHANGE_CATEGORY,
  CHANGE_DESCRIPTION,
  CHANGE_POST_DATA,
} from '../actions/types';

export const changePostFormData = (post) => {
  return {
    type: CHANGE_POST_DATA,
    payload: post
  }
}

export const changeTitle = (title) => {
  return {
    type: CHANGE_TITLE,
    payload: title
  }
}

export const changeDate = (date) => {
  return {
    type: CHANGE_DATE,
    payload: date
  }
}

export const changeAuthor = (author) => {
  return {
    type: CHANGE_AUTHOR,
    payload: author
  }
}

export const changeStatus = (status) => {
  return {
    type: CHANGE_STATUS,
    payload: status
  }
}

export const changeCategory = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  }
}

export const changeDescription = (description) => {
  return {
    type: CHANGE_DESCRIPTION,
    payload: description
  }
}



