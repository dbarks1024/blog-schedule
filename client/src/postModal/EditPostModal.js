import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitPostForm, deletePost } from './_actions';
import BlogForm from '../blogForm/BlogForm';

class EditPostModal extends Component {

  handleModalClose = () => {
    this.props.setModalOpen(!this.props.modalOpen);
    this.props.clearForm();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.submitPostForm();
  }

  handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.deletePost();
  }

  renderDelete = () => {
    if(this.props.id) {
      return <Button className='btn-danger ml-3' onClick={this.handleDelete}>Delete</Button>;
    }
  }

  render() { 
    const { modalOpen } = this.props;
    const closeBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.handleModalClose}>&times;</button>;
    return ( 
      <Modal isOpen={modalOpen} external={closeBtn}>
        <ModalHeader>Test</ModalHeader>
        {closeBtn}
        <ModalBody>
          <BlogForm handleSubmit={this.handleSubmit}  />
        </ModalBody>
      </Modal>
    );
  }
}

EditPostModal.propTypes = {
  modalOpen: PropTypes.bool,
  id: PropTypes.string,
  setModalOpen: PropTypes.func,
  submitPostForm: PropTypes.func,
  deletePost: PropTypes.func,
  clearForm: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { id, modalOpen } = state.postForm;
  return {
    modalOpen,
    id,
  };
};
 
export default connect(mapStateToProps, 
  { submitPostForm,
    deletePost,
  })(EditPostModal);
