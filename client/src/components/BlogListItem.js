import React, { Component } from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import moment from 'moment';
import 'uiw-iconfont/fonts/w-icon.css'; 
import "./BlogListItem.css";

class BlogListItem extends Component {
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
    const { item } = this.props;
    return (
      <ListGroupItem 
      color={this.listItemColor(item.status)} 
      key={this.props.index} 
      className='align-items-start flex-column'
      >
        <div className='float-left'>
          <i onClick={console.log('test')} className='w-icon-edit mt-auto mr-2'></i>
        </div>
        <div className='d-inline-block w-95'>
          <div className='justify-content-between d-flex'>
            <ListGroupItemHeading className='mb-0'>{item.title}</ListGroupItemHeading>
            <small>{moment(item.date).format('MM/DD/YYYY')}</small>
          </div>
          <div className='author'> 
            <small className='pr-2'> by: {item.author}</small>
            <btn className='btn btn-outline-primary btn-sm pt-0 pb-0'>{item.category}</btn>
          </div>
          <div className='justify-content-between d-flex'>
            <ListGroupItemText>{item.description}</ListGroupItemText>
            <p className='mb-0'>{item.status}</p>
          </div>
         </div>
      </ListGroupItem>
    );
  }
}
 
export default BlogListItem;