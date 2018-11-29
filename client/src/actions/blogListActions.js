import moment from 'moment';
import _ from 'lodash';
import { BLOG_LIST_DATA, SORTED_POSTS_LIST } from './types';
import { DATE_DESC, DATE_ASC, CATEGORY_ASC, CATEGORY_DESC, STATUS } from '../components/consts'; 

export const sortPostsList = () => {
  return (dispatch, getState) => {
    let sortedList = [];
    const sortBy = getState().postReducer.sortBy;
    const posts = getState().postReducer.posts;

    switch (sortBy) {
    case DATE_DESC:
      sortedList = _.orderBy(posts, ['date'], ['desc'] );
      break;
    case DATE_ASC:
      sortedList = _.orderBy(posts, ['date'], ['asc'] );
      break;
    case CATEGORY_DESC:
      sortedList = _.orderBy(posts, ['category'], ['desc']);
      break;
    case CATEGORY_ASC:
      sortedList = _.orderBy(posts, ['category'], ['asc']);
      console.log(sortedList);
      break;
    case STATUS:
      sortedList = _.orderBy(posts, ['status'], ['asc']);
      break;
    default:
      sortedList = _.orderBy(posts, ['date'], ['asc']);
      console.log('default sort');
      break;
    }

    dispatch({
      type: SORTED_POSTS_LIST,
      payload: sortedList,
    });
    dispatch(createBlogListData());
  };
};

export const createBlogListData = () => {
  return (dispatch, getState) => {
    const sortedList = getState().blogListReducer.sortedPostsList;

    const listData = getState().postReducer.dateRange.map((date) =>{
      const firstDate = moment(date, 'MM/DD/YYYY').subtract(1, 'day');
      const endDate = moment(date, 'MM/DD/YYYY').add(7, 'day');
      const data = _.filter(sortedList, (item) => (
        moment(item.date,).isBetween(firstDate, endDate)
      ))
        .map((item) => {
          return item;
        });   
      return {[date]: data};
    });
    console.log(listData);
    dispatch({
      type: BLOG_LIST_DATA,
      payload: listData
    });
  };
  
  
};
