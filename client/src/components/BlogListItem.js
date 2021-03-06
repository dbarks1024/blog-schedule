import React, { Component } from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { setModalOpen } from '../actions/postActions';
import { changePostFormData } from '../actions/changePostFormActions';
import 'uiw-iconfont/fonts/w-icon.css'; 
import './BlogListItem.css';

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
        className='align-items-start flex-column'
      >
        <div className='float-left'>
          <i 
            className='w-icon-edit mt-auto mr-2'
            onClick={() => {
              this.props.setModalOpen(true);
              this.props.changePostFormData(item);
            }
            } 
          ></i>
        </div>
        <div className='d-inline-block w-95'>
          <div className='justify-content-between d-flex'>
            <ListGroupItemHeading className='mb-0'>{item.title}</ListGroupItemHeading>
            <small>{moment(item.date).format('MM/DD/YYYY')}</small>
          </div>
          <div className='author'> 
            <small className='pr-2'> by: {item.author}</small>
            <button className='btn btn-outline-primary btn-sm pt-0 pb-0'>{item.category}</button>
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

BlogListItem.propTypes = {
  item: PropTypes.object,
  setModalOpen: PropTypes.func,
  changePostFormData: PropTypes.func,
};

export default connect(null, { setModalOpen, changePostFormData })(BlogListItem);