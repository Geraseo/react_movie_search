

export async function searchMovie (searchWord) {
  const response = await fetch(
        `http://www.omdbapi.com/?apikey=3644747b&type=movie&s=${searchWord}`
      );
      const movies = await response.json();
      return movies;
}