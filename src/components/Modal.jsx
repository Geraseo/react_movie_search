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
        <div className="body">
          <img src={oneMovie.Poster} alt="moviePoster" />
          <h6>Release date: </h6>
          <p>{oneMovie.Released}</p>
          <h6>Genre</h6> <p>{oneMovie.Genre}</p>
          <h6>Plot</h6>
          <p>{oneMovie.Plot}</p>
          <h6>Ratings</h6>{" "}
          <p>
            imDb {oneMovie.imdbRating} Metascore {oneMovie.Metascore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
