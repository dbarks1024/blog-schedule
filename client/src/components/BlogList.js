import React, { Component } from 'react';
import { Container, ListGroup, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAllPosts, setModalOpen, changeSortBy } from '../actions/postActions';
import BlogListItem from './BlogListItem';
import EditPostModal from './EditPostModal';

class BlogList extends Component {
  state = { blogs: [] }
  
  componentDidMount() {
    this.props.getAllPosts();
  }

  handleSortChange = (event) => {
    const value = event.target.value;
    this.props.changeSortBy(value);
  }

  render() { 
    let sortedList = [];
    switch (this.props.sortBy) {
      case 'date-desc':
        sortedList = _.orderBy(this.props.posts, ['date'], ['desc'] )
        break;
      case 'date-asc':
        sortedList = _.orderBy(this.props.posts, ['date'], ['asc'] )
        break;
      case 'category-desc':
        sortedList = _.orderBy(this.props.posts, ['category'], ['desc'])
        break;
      case 'category-asc':
        sortedList = _.orderBy(this.props.posts, ['category'], ['asc'])
        break;
      case 'status':
        sortedList = _.orderBy(this.props.posts, ['status'], ['asc'])
        break;
      default:
        sortedList = _.orderBy(this.props.posts, ['date'], ['asc'] )
        break;
    }
    return (  
      <Container>
        <Button className='mb-3' onClick={this.props.setModalOpen}>New Post</Button>
        <Form inline className='float-right'>
          <FormGroup>
            <Label for='sort'>Sort By:</Label>
            <Input type='select' id='sort' name='sort' equired onChange={this.handleSortChange} >
              <option>date-asc</option>
              <option>date-desc</option>
              <option>category-asc</option>
              <option>category-desc</option>
              <option>status</option>
            </Input>
          </FormGroup>
        </Form>
        <EditPostModal />
        <ListGroup>
          {sortedList.map((item) => <BlogListItem key={item.id} item={item}/>)}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>{
  const { sortBy, posts } = state.postReducer;
  return {
    posts: posts,
    sortBy: sortBy,
  };
}
 
export default connect(mapStateToProps, { getAllPosts, setModalOpen, changeSortBy })(BlogList);