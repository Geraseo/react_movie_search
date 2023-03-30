import { useState, useEffect, useRef } from "react";
import { searchMovie } from "../services/api";
import "./SearchMovies.css";

const SearchMovies = ({ setResults }) => {
  const [searchWord, setSearchWord] = useState("");
  const inputRef = useRef("");

  // 1. uzsettinti paieskos zodi i state
  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(inputRef.current.value);
    getMovies(searchWord);
  };
  // 2. funkcija kreppiasi i services api
  const getMovies = (searchWord) => {
    searchMovie(searchWord).then((res) => {
      setResults(res);
    });
  };
  // 3. useEffectm kuris stebi, kada kreiptis i api
  useEffect(() => {
    getMovies(searchWord);
  }, [searchWord]);

  return (
    <div className="seachDiv">
      <h2>Movie information</h2>
      <div>
        <input
          className="searchInput"
          type="text"
          ref={inputRef}
          placeholder="Search for movie"
        />
        <button className="btn" onClick={handleChange}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchMovies;

{
  /* <div>
      <input
        className="searchInput"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={searchWord}
        placeholder="Search for movies..."
      />
      <button className="btn">Search</button>
    </div> */
}
