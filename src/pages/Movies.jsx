import { useEffect, useState } from "react";
import "../styles/Movies.css";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: { language: "en" },
            headers: {
              accept: "application/json",
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRkYjgyMWQ4NzllMGVkOTYyODlmMjAzMTZjOTFkMyIsInN1YiI6IjY1MjNlMzYzZmQ2MzAwMDEzOWU0OTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.og5zxDtz-s3PxXBKJ3QhNaYiy_ZNJjKLS5bdnqc5Hdk',
            },
          }
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = {
          method: "GET",
          url: "https://api.themoviedb.org/3/discover/movie",
          params: {
            include_adult: "false",
            include_video: "false",
            language: "en-US",
            page: currentPage,
            sort_by: "popularity.desc",
          },
          headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRkYjgyMWQ4NzllMGVkOTYyODlmMjAzMTZjOTFkMyIsInN1YiI6IjY1MjNlMzYzZmQ2MzAwMDEzOWU0OTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.og5zxDtz-s3PxXBKJ3QhNaYiy_ZNJjKLS5bdnqc5Hdk',
          },
        };

        const response = await axios.request(moviesData);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleGenreSelection = (genreId) => {
    setSelectedGenre(genreId);
    setCurrentPage(1); // Reset to the first page when changing the genre
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) =>
        movie.genre_ids.includes(selectedGenre)
      )
    : movies;

  return (
    <div className="movies-container">
      <div className="movie-header">
        <h1>Movies</h1>
        <div
          className="genre-drop"
          onMouseEnter={() => setShowGenres(true)}
          onMouseLeave={() => setShowGenres(false)}
        >
          Genre
          <span className="arrow-icon">
            <ArrowDropDownIcon />
          </span>
          {showGenres && (
            <ul>
              {genres.map((genre) => (
                <li
                  key={genre.id}
                  onClick={() => handleGenreSelection(genre.id)}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="movie-list">
        {filteredMovies && filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <li key={movie.id} className="movie-item">
              <Link to={`/movieinfo/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  style={{ maxWidth: "200px" }}
                />
              </Link>
            </li>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
          <div className="loadButtonDiv">
      <button className="loadButton" onClick={loadMore} >Load More</button>
      </div>
    </div>
  );
};

export default Movies;
