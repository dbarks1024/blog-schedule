import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import { createBlogListData } from '../actions/blogListActions';
import BlogListItem from './BlogListItem';
import { DATE_ASC } from './consts';
import ListSectionItem from './ListSectionItem';


class BlogLists extends Component {
  renderLists = ( ) => {
    const listData = this.props.blogListData;
    const sortedList = this.props.sortedPostsList;
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
    return ( 
      <ListGroup>
        {this.renderLists()}
      </ListGroup>
    );
  }
}
 
const mapStateToProps = (state) =>{
  const { blogListData, sortedPostsList } = state.blogListReducer;

  return {
    blogListData,
    sortedPostsList,
  };
};

export default connect(mapStateToProps, { createBlogListData })(BlogLists);