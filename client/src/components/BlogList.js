import React, { Component } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class BlogList extends Component {
  state = { blogs: [] }
  
  componentDidMount() {
    axios.get('/api/posts')
    .then((response) => {
      console.log(response.body);
    }) 
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
 
export default BlogList;