import React, { ReactNode } from 'react';
import './Modal.css';

type ModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onClose?: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen, onClose }) => {

  // Need a function for onclose, a state which renders if it's opened or closed

  const onThisClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  }

  if (isOpen === false) {
    return null;
  }

  return (
    <>
      <div className='modal-overlay' onClick={onThisClose}/>
      <div role='dialog' aria-modal='true' className='modal-content'>
        {children}
        <div>
          <button className='modal-close-button' onClick={onThisClose}>Close</button>
        </div>  
      </div>
    </>
  );
};

export default Modal;