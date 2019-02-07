import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { DATE_DESC, DATE_ASC, CATEGORY_ASC, CATEGORY_DESC, STATUS } from '../consts'; 
import { changeSortBy, sortPostsList } from './_actions';


class SortByForm extends Component {
  handleSortChange = (event) => {
    const value = event.target.value;
    this.props.changeSortBy(value);
    this.props.sortPostsList();
  }

  render() { 
    return (  
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
    );
  }
}

SortByForm.propTypes = {
  changeSortBy : PropTypes.func,
  sortPostsList: PropTypes.func,
};

const mapStateToProps = () =>{
  return {};
};
 
export default connect(mapStateToProps, { changeSortBy, sortPostsList })(SortByForm);