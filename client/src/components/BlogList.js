import _ from 'lodash';
import React, { Component } from 'react';
import { DATE_DESC, DATE_ASC, CATEGORY_ASC, CATEGORY_DESC, STATUS } from './consts'; 
import { connect } from 'react-redux';
import { Button, Container, Form, FormGroup, Input, Label, ListGroup } from 'reactstrap';
import { changeSortBy, getAllPosts, setModalOpen } from '../actions/postActions';
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
      case DATE_DESC:
        sortedList = _.orderBy(this.props.posts, ['date'], ['desc'] )
        break;
      case DATE_ASC:
        sortedList = _.orderBy(this.props.posts, ['date'], ['asc'] )
        break;
      case CATEGORY_DESC:
        sortedList = _.orderBy(this.props.posts, ['category'], ['desc'])
        break;
      case CATEGORY_ASC:
        sortedList = _.orderBy(this.props.posts, ['category'], ['asc'])
        console.log(sortedList);
        break;
      case STATUS:
        sortedList = _.orderBy(this.props.posts, ['status'], ['asc'])
        break;
      default:
        sortedList = _.orderBy(this.props.posts, ['date'], ['asc'] )
        console.log('default sort');
        break;
    }
    return (  
      <Container>
        <Button className='mb-3' onClick={this.props.setModalOpen}>New Post</Button>
        <Form inline className='float-right'>
          <FormGroup>
            <Label for='sort'>Sort By:</Label>
            <Input type='select' id='sort' name='sort' required onChange={this.handleSortChange} >
              <option value={DATE_ASC}>Date Asc.</option>
              <option value={DATE_DESC}>Date Desc.</option>
              <option value={CATEGORY_ASC}>Category Asc.</option>
              <option value={CATEGORY_DESC}>Category Desc.</option>
              <option value={STATUS}>Staus</option>
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