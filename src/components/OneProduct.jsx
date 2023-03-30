import React from "react";
import "./OneMovie.css";
import Modal from "./Modal";
import { useState } from "react";
import { getMovie } from "../services/api";

const OneMovie = (props) => {
  const items = props.moviesFromApi.Search;
  // console.log(items);

  // const [openModal, setOpenModal] = useState(false);
  const [results, setResults] = useState(true);
  const [oneMovie, setOneMovie] = useState(true);

  const getMovieById = (movieID) => {
    console.log(movieID);

    if (results === false) {
      setResults(true);
    }
    setOneMovie(false);
    getMovie(movieID).then((data) => {
      setResults(data);
    });
  };

  return (
    <div className="movieContainer">
      {items?.map((movieItem, index) => {
        return (
          <div key={index} className="oneMovieCard">
            <h2>
              {movieItem.Title} ({movieItem.Year})
            </h2>
            <img src={movieItem.Poster} alt={movieItem.Title} />
            <button
              onClick={() => getMovieById(movieItem.imdbID)}
              className="openModalBtn"
            >
              more
            </button>
          </div>
        );
      })}
      {oneMovie ? null : <Modal closeModal={setOneMovie} oneMovie={results} />}
    </div>
  );
};

export default OneMovie;

{
  /* <div className="movieContainer">
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
                getMovieById(item.imdbID);
              }}
            >
              More...
            </button>
          </div>
        ))}
      {oneMovie ? null : <Modal closeModal={setOneMovie} results={results} />}
    </div> */
}
