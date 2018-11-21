import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/postActions';
import "./BlogList.css";
import BlogListItem from './BlogListItem';

class BlogList extends Component {
  state = { blogs: [] }
  
  componentDidMount() {
    this.props.getAllPosts();
  }

  

  render() { 
    return (  
      <Container>
        <ListGroup>
          {this.props.posts.map((item, index) => <BlogListItem item={item} index={index} />)}
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