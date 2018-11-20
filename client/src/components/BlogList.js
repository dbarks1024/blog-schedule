import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/postActions';
import "./BlogList.css";

class BlogList extends Component {
  state = { blogs: [] }
  
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() { 
    return (  
      <Container>
        <ListGroup>
          {this.props.posts.map((item, index) => {
            return (
            <ListGroupItem key={index} className='align-items-start flex-column'>
                <div className='justify-content-between d-flex'>
                  <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
                  <small>{item.date}</small>
                </div>
              <ListGroupItemText>{item.description}</ListGroupItemText>
            </ListGroupItem>);
          })}
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