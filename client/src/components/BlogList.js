import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/postActions';


class BlogList extends Component {
  state = { blogs: [] }
  
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() { 
    return (  
      <Container>
        <ListGroup>
          <ListGroupItem>
            
          </ListGroupItem>
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