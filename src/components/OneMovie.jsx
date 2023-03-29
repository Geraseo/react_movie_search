import React from "react";
import "./OneMovie.css";
import Modal from "./Modal";
import { useState } from "react";

const OneMovie = (props) => {
  const items = props.moviesFromApi.Search;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="movieContainer">
      {items &&
        items.map((item) => (
          <div className="oneMovieCard" key={item.imdbID}>
            <h3>
              {item.Title} ({item.Year})
            </h3>
            <img src={item.Poster} alt="" />
            <button
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              More...
            </button>
          </div>
        ))}
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default OneMovie;
