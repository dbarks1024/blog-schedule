import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { setModalOpen } from '../actions/postActions';

class EditPostModal extends Component {
  render() { 
    const { title } = this.props.changePostData;
    return ( 
      <Modal isOpen={this.props.modalOpen}>
        <ModalHeader>Test</ModalHeader>
        <ModalBody>{title}</ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { modalOpen, changePostData } = state.postReducer
  return {
    modalOpen,
    changePostData
  }
}
 
export default connect(mapStateToProps, { setModalOpen })(EditPostModal);