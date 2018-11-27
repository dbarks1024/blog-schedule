import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

class ListSectionItem extends Component {
  render() { 
    return (  
      <ListGroupItem>{this.props.name}</ListGroupItem>
    );
  }
}

ListSectionItem.propTypes = {
  name: PropTypes.string,
};
 
export default ListSectionItem;