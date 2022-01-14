import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackDropClick}>
        <Modal>{this.props.children}</Modal>
      </Overlay>,
      modalRoot,
    );
  }
}
ModalWindow.protoTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
export default ModalWindow;
