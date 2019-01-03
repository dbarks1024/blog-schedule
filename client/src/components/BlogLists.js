import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import { createBlogListData, moveBlogListData } from '../actions/blogListActions';
import BlogListItem from './BlogListItem';
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
    this.forceUpdate();
  };

  renderLists = ( ) => {
    const listData = this.props.blogListData;
    return listData.map((list) => {
      const groupName = Object.keys(list)[0];
      return(
        <div
          key={groupName}
        >
          <ListSectionItem
            name={groupName}
          />
          <Droppable
            droppableId={groupName}
          >
            {provided => (
              <ul
                ref={provided.innerRef}
                key={groupName}
                style={{minHeight: 3, paddingLeft: 0}}
              >
                {list[groupName].map((listItem, index) => (
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
  const { blogListData } = state.blogListReducer;
  const { sortBy } = state.postReducer;
  return {
    blogListData,
    sortBy,
  };
};

export default connect(mapStateToProps, { createBlogListData, moveBlogListData })(BlogLists);