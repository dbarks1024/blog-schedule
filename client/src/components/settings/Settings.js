import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { changeWeeksPast } from '../../actions/settingsActions';

class Settings extends Component {
  onChangeWeeksPast = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.changeWeeksPast(event.target.value);
  }
  render() { 
    return (
      <div>
        <h1>Settings</h1>
        <Form>
          <FormGroup>
            <Label>Weeks Past</Label>
            <Input type='text' onChange={this.onChangeWeeksPast} value={this.props.weeksPast}></Input>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

Settings.propTypes = {
  weeksPast: PropTypes.string,
  changeWeeksPast: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { weeksPast } = state.settings;
  return {
    weeksPast,
  };
};
 
export default connect(mapStateToProps, {changeWeeksPast})(Settings);