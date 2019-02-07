import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap'; 

class SubmitRequest extends Component {
  render() { 
    return ( 
      <div>
        <h1>Submit Blog Post Ideas</h1>
        <Form>
          <FormGroup>
            <Label>Test</Label>
            <Input>Test</Input>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
 
export default SubmitRequest;