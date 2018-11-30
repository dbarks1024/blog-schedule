import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import { createBlogListData, moveBlogListData } from '../actions/blogListActions';
import BlogListItem from './BlogListItem';
import { DATE_ASC } from './consts';
import ListSectionItem from './ListSectionItem';


class BlogLists extends Component {
  onDragEnd = result => {
    console.log(result);
    const {destination, source} = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    this.props.moveBlogListData(destination, source);
  };

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
                  style={{minHeight: 3, paddingLeft: 0}}
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
      <DragDropContext onDragEnd={this.onDragEnd}>
        <ListGroup>
          {this.renderLists()}
        </ListGroup>
      </DragDropContext>
    );
  }
}
 
const mapStateToProps = (state) =>{
  const { blogListData, sortedPostsList } = state.blogListReducer;
  const { sortBy } = state.postReducer;
  return {
    blogListData,
    sortedPostsList,
    sortBy,
  };
};

export default connect(mapStateToProps, { createBlogListData, moveBlogListData })(BlogLists);