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

  listItemColor(status) {
    switch (status) {
      case 'Not Started':
        return 'danger';
      case 'Drafting':
      case 'Review':
        return 'warning';
      case 'Ready': 
        return 'success';
      case 'Posted':
        return 'info';
      default: 
        return '';
    }
  }

  render() { 
    return (  
      <Container>
        <ListGroup>
          {this.props.posts.map((item, index) => {
            return (
            <ListGroupItem color={this.listItemColor(item.status)} key={index} className='align-items-start flex-column'>
              <div className='justify-content-between d-flex'>
                <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
                <small>{item.date}</small>
              </div>
              <div className='justify-content-between d-flex'>
                <ListGroupItemText>{item.description}</ListGroupItemText>
                <p>{item.status}</p>
              </div>

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