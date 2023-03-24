import React from 'react';
import './Note.css'

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <p>Modal content goes here</p>
      </div>
    </div>
  );
}

export default Modal;
