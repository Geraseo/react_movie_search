import { useState } from "react";
import OneMovie from "./OneMovie";
import SearchMovie from "./SearchMovies";

const Main = () => {
  const [moviesFromApi, setMoviesFromApi] = useState([]);

  const setResults = (movies) => {
    setMoviesFromApi(movies);
  };

  // console.log(moviesFromApi);

  return (
    <div>
      <SearchMovie setResults={setResults} />
      <OneMovie moviesFromApi={moviesFromApi} />
    </div>
  );
};

export default Main;
