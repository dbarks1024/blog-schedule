import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import getAllPosts from '../actions/postActions';
import { connect } from 'mongoose';

class BlogList extends Component {
  state = { blogs: [] }
  
  componentDidMount() {
    this.getAllPosts();
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
 
export default connect({}, getAllPosts)(BlogList);