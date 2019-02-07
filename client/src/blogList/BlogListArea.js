import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DATE_DESC, DATE_ASC, CATEGORY_ASC, CATEGORY_DESC, STATUS } from '../consts'; 
import { connect } from 'react-redux';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { changeSortBy, setModalOpen } from '../actions/postActions';
import { sortPostsList, getDateRange, getAllPosts } from './_actions';
import { clearForm } from '../postForm/_actions';
import BlogLists from './BlogLists';
import EditPostModal from '../postForm/EditPostModal';

class BlogListArea extends Component {
  
  componentDidMount() {
    this.props.getAllPosts();
    this.props.getDateRange();
  }

  handleSortChange = (event) => {
    const value = event.target.value;
    this.props.changeSortBy(value);
    this.props.sortPostsList();
  }

  handleNewPost = () => {
    this.props.setModalOpen(true);
    this.props.clearForm();
  }

  render() { 
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
        <EditPostModal setModalOpen={this.props.setModalOpen} clearForm={this.props.clearForm} />
        <BlogLists/>
      </Container>
    );
  }
}

BlogListArea.propTypes = {
  setModalOpen: PropTypes.func,
  getAllPosts: PropTypes.func,
  changeSortBy : PropTypes.func,
  clearForm: PropTypes.func,
  getDateRange: PropTypes.func,
  sortPostsList: PropTypes.func,
};

const mapStateToProps = () =>{
  return {};
};
 
export default connect(mapStateToProps, { getAllPosts, setModalOpen, changeSortBy, clearForm, getDateRange, sortPostsList })(BlogListArea);