import { useState, useEffect } from "react";
import { searchMovie } from "../services/api";
import "./SearchMovies.css";

const SearchMovies = ({ setResults }) => {
  const [searchWord, setSearchWord] = useState("");
  // 1. uzsettinti paieskos zodi i state
  const handleChange = (searchWord) => {
    setSearchWord(searchWord);
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
    <div>
      <input
        className="searchInput"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={searchWord}
        placeholder="Search for movies..."
      />
    </div>
  );
};

export default SearchMovies;
