import React, { Component } from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import moment from 'moment';

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
    console.log(this.props.item)
    const { item } = this.props;
    return (
      <ListGroupItem color={this.listItemColor(item.status)} key={this.props.index} className='align-items-start flex-column'>
        <div className='justify-content-between d-flex'>
          <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
          <small>{moment(item.date).format('MM/DD/YYYY')}</small>
        </div>
        <div className='justify-content-between d-flex'>
          <ListGroupItemText>{item.description}</ListGroupItemText>
          <p>{item.status}</p>
        </div>
        </ListGroupItem>
    );
  }
}
 
export default BlogListItem;