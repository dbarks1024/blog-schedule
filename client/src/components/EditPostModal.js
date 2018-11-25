import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { setModalOpen } from '../actions/postActions';
import { changeTitle, changeAuthor, changeStatus, changeCategory, changeDescription, changeDate, submitPostForm } from '../actions/changePostFormActions';

class EditPostModal extends Component {

  handleModalClose = () => {
    this.props.setModalOpen(!this.props.modalOpen)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation();
    this.props.submitPostForm()
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    switch (name) {
      case 'title':
        this.props.changeTitle(value);
        break;
      case 'author':
        this.props.changeAuthor(value);
        break;
      case 'date':
        this.props.changeDate(value);
        break;
      case 'status':
        this.props.changeStatus(value);
        break;
      case 'category':
        this.props.changeCategory(value);
        break;
      case 'description':
        this.props.changeDescription(value);
        break;
      default:
        break;
    }
  }

  isLoading = () => {
    if(this.props.loading) {
      return 'spin';
    }else {
      return 'Submit';
    }
  }

  render() { 
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.handleModalClose}>&times;</button>;
    return ( 
      <Modal isOpen={this.props.modalOpen} external={externalCloseBtn}>
        <ModalHeader>Test</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input type='text' id='title' name='title' value={this.props.title} required onChange={this.handleInputChange}></Input>
            </FormGroup>
            <FormGroup>
              <Label for='author'>Author</Label>
              <Input type='text' id='author' name='author' value={this.props.author} required onChange={this.handleInputChange}></Input>
            </FormGroup>
            <FormGroup>
              <Label for='date'>Date</Label>
              <Input type='date' id='date' name='date' value={this.props.date} required onChange={this.handleInputChange}></Input>
            </FormGroup>
            <FormGroup>
              <Label for='status'>Status</Label>
              <Input type='status' id='status' name='status' value={this.props.status} required onChange={this.handleInputChange}></Input>
            </FormGroup>
            <FormGroup>
              <Label for='category'>Category</Label>
              <Input type='text' id='category' name='category' value={this.props.category} required onChange={this.handleInputChange} ></Input>
            </FormGroup>
            <FormGroup>
              <Label for='description'>Description</Label>
              <Input type='text' id='description' name='description' value={this.props.description} required onChange={this.handleInputChange}></Input>
            </FormGroup>
            <Button type='submit' onClick={this.handleSubmit}>
              {this.isLoading()}
              </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { modalOpen } = state.postReducer
  const { title, author, date, status, category, description, loading } = state.postForm
  return {
    modalOpen,
    title,
    author,
    date,
    status,
    category,
    description,
    loading
  }
}
 
export default connect(mapStateToProps, 
  { setModalOpen, 
    changeTitle, 
    changeAuthor, 
    changeStatus, 
    changeCategory, 
    changeDescription, 
    changeDate,
    submitPostForm,
   })(EditPostModal);