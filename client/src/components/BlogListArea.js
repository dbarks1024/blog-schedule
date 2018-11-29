import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { DATE_DESC, DATE_ASC, CATEGORY_ASC, CATEGORY_DESC, STATUS } from './consts'; 
import { connect } from 'react-redux';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { changeSortBy, getAllPosts, setModalOpen, getDateRange } from '../actions/postActions';
import { clearForm } from '../actions/changePostFormActions';
import BlogLists from './BlogLists';
import EditPostModal from './EditPostModal';

class BlogListArea extends Component {
  
  componentDidMount() {
    this.props.getAllPosts();
    this.props.getDateRange();
  }

  handleSortChange = (event) => {
    const value = event.target.value;
    this.props.changeSortBy(value);
  }

  handleNewPost = () => {
    this.props.setModalOpen(true);
    this.props.clearForm();
  }
  onDragEnd = result => {
    console.log(result);
  };



  render() { 
    let sortedList = [];
    switch (this.props.sortBy) {
    case DATE_DESC:
      sortedList = _.orderBy(this.props.posts, ['date'], ['desc'] );
      break;
    case DATE_ASC:
      sortedList = _.orderBy(this.props.posts, ['date'], ['asc'] );
      break;
    case CATEGORY_DESC:
      sortedList = _.orderBy(this.props.posts, ['category'], ['desc']);
      break;
    case CATEGORY_ASC:
      sortedList = _.orderBy(this.props.posts, ['category'], ['asc']);
      console.log(sortedList);
      break;
    case STATUS:
      sortedList = _.orderBy(this.props.posts, ['status'], ['asc']);
      break;
    default:
      sortedList = _.orderBy(this.props.posts, ['date'], ['asc']);
      console.log('default sort');
      break;
    }

    

    return (  
      <Container>
        <Button className='mb-3' onClick={this.handleNewPost}>New Post</Button>
        <Form inline className='float-right'>
          <FormGroup>
            <Label for='sort'>Sort By:</Label>
            <Input type='select' id='sort' name='sort' required onChange={this.handleSortChange} >
              <option value={DATE_ASC}>Date Asc.</option>
              <option value={DATE_DESC}>Date Desc.</option>
              <option value={CATEGORY_ASC}>Category Asc.</option>
              <option value={CATEGORY_DESC}>Category Desc.</option>
              <option value={STATUS}>Staus</option>
            </Input>
          </FormGroup>
        </Form>
        <EditPostModal />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <BlogLists sortedList={sortedList}/>
        </DragDropContext>
      </Container>
    );
  }
}

BlogListArea.propTypes = {
  setModalOpen: PropTypes.func,
  getAllPosts: PropTypes.func,
  changeSortBy : PropTypes.func,
  posts: PropTypes.array,
  dateRange: PropTypes.array,
  sortBy: PropTypes.string,
  clearForm: PropTypes.func,
  getDateRange: PropTypes.func
};

const mapStateToProps = (state) =>{
  const { sortBy, posts, dateRange } = state.postReducer;
  return {
    posts,
    sortBy,
    dateRange,
  };
};
 
export default connect(mapStateToProps, { getAllPosts, setModalOpen, changeSortBy, clearForm, getDateRange })(BlogListArea);