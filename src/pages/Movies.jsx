import { useState } from "react";
import "../styles/Movies.css";
import Poster1 from "../assets/poster1.jpg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Movies = () => {
  const [showGenres, setShowGenres] = useState(false);

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-fi",
    "Romance",
    "Documentary",
  ];

  const mockData = [
    {
      id: 1,
      title: "Inception",
      poster: Poster1,
      genre: "Sci-fi",
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster: Poster1,
      genre: "Action",
    },
    {
        id: 1,
        title: "Inception",
        poster: Poster1,
        genre: "Sci-fi",
      },
      {
        id: 2,
        title: "The Dark Knight",
        poster: Poster1,
        genre: "Action",
      },
      {
        id: 1,
        title: "Inception",
        poster: Poster1,
        genre: "Sci-fi",
      },
      {
        id: 2,
        title: "The Dark Knight",
        poster: Poster1,
        genre: "Action",
      },
      {
        id: 1,
        title: "Inception",
        poster: Poster1,
        genre: "Sci-fi",
      },
      {
        id: 2,
        title: "The Dark Knight",
        poster: Poster1,
        genre: "Action",
      },
      {
        id: 1,
        title: "Inception",
        poster: Poster1,
        genre: "Sci-fi",
      },
      {
        id: 2,
        title: "The Dark Knight",
        poster: Poster1,
        genre: "Action",
      },
      {
        id: 1,
        title: "Inception",
        poster: Poster1,
        genre: "Sci-fi",
      },
      {
        id: 2,
        title: "The Dark Knight",
        poster: Poster1,
        genre: "Action",
      }
  ];

  const [movies] = useState(mockData);

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
          <span className="arrow-icon"><ArrowDropDownIcon/></span>
          {showGenres && (
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
