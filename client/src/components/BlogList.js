import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/postActions';
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
 
export default connect(mapStateToProps, { getAllPosts })(BlogList);