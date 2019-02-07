import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container } from 'reactstrap';
import { sortPostsList, getDateRange, getAllPosts, setModalOpen, } from './_actions';
import { clearForm } from '../postForm/_actions';
import BlogLists from './BlogLists';
import EditPostModal from '../postForm/EditPostModal';
import SortByForm from './SortByForm';

class BlogListArea extends Component {
  
  componentDidMount() {
    this.props.getAllPosts();
    this.props.getDateRange();
  }

  handleNewPost = () => {
    this.props.setModalOpen(true);
    this.props.clearForm();
  }

  render() { 
    return (  
      <Container>
        <Button className='mb-3' onClick={this.handleNewPost}>New Post</Button>
        <SortByForm/>
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
 
export default connect(mapStateToProps, { getAllPosts, setModalOpen, clearForm, getDateRange, sortPostsList })(BlogListArea);