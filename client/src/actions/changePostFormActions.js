import {
  CHANGE_TITLE,
  CHANGE_AUTHOR,
  CHANGE_DATE,
  CHANGE_STATUS,
  CHANGE_CATEGORY,
  CHANGE_DESCRIPTION,
  CHANGE_POST_DATA,
  FORM_LOADING,
  MODAL_OPEN,
} from '../actions/types';
import { getAllPosts } from './postActions';


export const changePostFormData = (post) => {
  return {
    type: CHANGE_POST_DATA,
    payload: post
  }
};

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
};

export const changeAuthor = (author) => {
  return {
    type: CHANGE_AUTHOR,
    payload: author
  }
};

export const changeStatus = (status) => {
  return {
    type: CHANGE_STATUS,
    payload: status
  }
};

export const changeCategory = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  }
};

export const changeDescription = (description) => {
  return {
    type: CHANGE_DESCRIPTION,
    payload: description
  }
};

export const submitPostForm = () => {
  return (dispatch, getState) => {
    const data = {
      "title": getState().postForm.title,
      "author": getState().postForm.author,
      "date": getState().postForm.date,
      "status": getState().postForm.status,
      "category": getState().postForm.category,
      "description": getState().postForm.description
    };
    dispatch({
      type: FORM_LOADING,
      payload: true
    });
    const id = getState().postForm.id;
    fetch(`/api/post/${id}`, {
      method: "PUT",
      mode: "cors", 
      "async": true,
      "crossDomain": true,
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      }, 
      body: JSON.stringify(data), 
  })
  .then(response => console.log(response))
  .then(() => {
    dispatch({
      type: FORM_LOADING,
      payload: false
    })
    dispatch({
      type: MODAL_OPEN,
      payload: false
    })
    dispatch(getAllPosts())
  })
  }
}
