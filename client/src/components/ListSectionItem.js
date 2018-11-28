import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

class ListSectionItem extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <ListGroupItem>{this.props.name}</ListGroupItem>
        {this.props.children}
      </React.Fragment>
    );
  }
}

ListSectionItem.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array
};
 
export default ListSectionItem;