import _ from 'lodash';
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { DATE_DESC, DATE_ASC, CATEGORY_ASC, CATEGORY_DESC, STATUS } from './consts'; 
import { connect } from 'react-redux';
import { Button, Container, Form, FormGroup, Input, Label, ListGroup } from 'reactstrap';
import { changeSortBy, getAllPosts, setModalOpen, getDateRange } from '../actions/postActions';
import { clearForm } from '../actions/changePostFormActions';
import BlogListItem from './BlogListItem';
import EditPostModal from './EditPostModal';
import ListSectionItem from './ListSectionItem';

class BlogList extends Component {
  
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

  filterBlogListItem(sortedList, date) {
    console.log(date);
    const firstDate = moment(date, 'MM/DD/YYYY').subtract(1, 'day');
    const endDate = moment(date, 'MM/DD/YYYY').add(7, 'day');
    return _.filter(sortedList, (item) => (
      moment(item.date,).isBetween(firstDate, endDate)
    ))
      .map((item) => <BlogListItem key={item._id} item={item}/>);
  }

  renderListItems = (sortedList) => {
    if(this.props.sortBy === DATE_ASC){
      return this.props.dateRange.map((date) => (
        <ListSectionItem name={date} key={date}>
          {this.filterBlogListItem(sortedList, date)}
        </ListSectionItem>
      )
      );
    } 
    return sortedList.map((item) => <BlogListItem key={item._id} item={item}/>);
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
        <ListGroup>
          {this.renderListItems(sortedList)}
        </ListGroup>
      </Container>
    );
  }
}

BlogList.propTypes = {
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
 
export default connect(mapStateToProps, { getAllPosts, setModalOpen, changeSortBy, clearForm, getDateRange })(BlogList);