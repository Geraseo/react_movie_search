import React from "react";
import "./Modal.css";
const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)} className="closeModalBtn">
            X
          </button>
        </div>
        <div className="title"> </div>
        <div className="body"> </div>
        <div className="footer"> </div>
      </div>
    </div>
  );
};

export default Modal;
