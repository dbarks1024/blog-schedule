import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { setModalOpen } from '../actions/postActions';

class EditPostModal extends Component {
  render() { 
    return ( 
      <Modal isOpen={this.props.modalOpen}>
        <ModalHeader>Test</ModalHeader>
        <ModalBody>Tesing modal body</ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { modalOpen } = state.postReducer
  return {
    modalOpen
  }
}
 
export default connect(mapStateToProps, { setModalOpen })(EditPostModal);