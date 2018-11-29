import moment from 'moment';
import _ from 'lodash';

export const createBlogListData = (sortedList) => {
  return (dispatch, getState) => {
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
  
    dispatch({
      type: 'test',
      payload: listData
    });
  };
  
  
};
