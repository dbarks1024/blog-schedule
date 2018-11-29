import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import BlogListItem from './BlogListItem';
import ListSectionItem from './ListSectionItem';
import { createBlogListData } from  '../actions/blogListActions';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DATE_ASC } from './consts'; 


class BlogLists extends Component {
  componentDidMount = () => {
    this.props.createBlogListData(this.props.sortedList);
  };
  

  renderLists = (listData, sortedList) => {
    if(this.props.sortBy === DATE_ASC){
      return listData.map((list) => {
        const date = Object.keys(list)[0];
        return(
          <div
            key={date}
          >
            <ListSectionItem
              name={date}
            />
            <Droppable
              droppableId={date}
            >
              {provided => (
                <ul
                  ref={provided.innerRef}
                  key={date}
                >
                  {list[date].map((listItem, index) => (
                    <Draggable
                      key={listItem._id}
                      draggableId={listItem._id}
                      index={index}
                    >
                      {provided => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <BlogListItem 
                            item={listItem}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>          
          </div>
        );
      }
      );
    } 
    return sortedList.map((item) => <BlogListItem key={item._id} item={item}/>);
  };

  render() { 
    const listData = this.props.dateRange.map((date) =>{
      const firstDate = moment(date, 'MM/DD/YYYY').subtract(1, 'day');
      const endDate = moment(date, 'MM/DD/YYYY').add(7, 'day');
      const data = _.filter(this.props.sortedList, (item) => (
        moment(item.date,).isBetween(firstDate, endDate)
      ))
        .map((item) => {
          return item;
        });   
      return {[date]: data};
    });
    

    return ( 
      <ListGroup>
        {this.renderLists(listData, this.props.sortedList)}
      </ListGroup>
    );
  }
}
 
const mapStateToProps = (state) =>{
  const { sortBy, posts, dateRange } = state.postReducer;
  return {
    posts,
    sortBy,
    dateRange,
  };
};

export default connect(mapStateToProps, { createBlogListData })(BlogLists);