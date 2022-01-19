import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
export default function ModalWindow({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  const handleBackDropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot,
  );
}
ModalWindow.protoTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
