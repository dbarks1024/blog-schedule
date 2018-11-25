import React, { Component } from 'react';
import { Container, ListGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllPosts, setModalOpen } from '../actions/postActions';
import BlogListItem from './BlogListItem';
import EditPostModal from './EditPostModal';

class BlogList extends Component {
  state = { blogs: [] }
  
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() { 
    return (  
      <Container>
        <Button className='mb-3' onClick={this.props.setModalOpen}>New Post</Button>
        <EditPostModal />
        <ListGroup>
          {this.props.posts.map((item, index) => <BlogListItem key={index} item={item}/>)}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    posts: state.postReducer.posts
  };
}
 
export default connect(mapStateToProps, { getAllPosts, setModalOpen })(BlogList);