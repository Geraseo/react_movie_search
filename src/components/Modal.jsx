import React from "react";
import "./Modal.css";

const Modal = ({ closeModal, oneMovie }) => {
  console.log(oneMovie);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(true)} className="closeModalBtn">
            X
          </button>
        </div>
        <div className="title">
          <h2> {oneMovie.Title} </h2>
        </div>
        <div className="body"></div>
        <div className="footer"> </div>
      </div>
    </div>
  );
};

export default Modal;
