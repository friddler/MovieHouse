import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/MovieInfo.css";

const MovieInfo = (props) => {
  const { movieId } = useParams(); // Ta emot movieId från sökvägen
  const [movieData, setMovieData] = useState(null); // State för att lagra filminformation
  const apiKey = "6e8f505c75786ea1c4d7fa68159ede64";

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        console.log(response);

        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av filmdata");
        }

        const data = await response.json();

        console.log("Filmdata:", data);

        setMovieData(data);
      } catch (error) {
        console.error("Fel vid hämtning av filmdata:", error);
      }
    };

    fetchMovieData();
  }, [apiKey, movieId]);

  if (movieData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-info">
      <div className="backdrop-container">
        <img
          id="backdrop-img"
          src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`}
          alt={`${movieData.title} Backdrop`}
        />
      </div>

      <div className="movie-content">
        <h1 className="movie-info-title">{movieData.title}</h1>

        <div className="movie-details-container">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
              alt={movieData.title}
            />
            <div className="buttons-container">
              <button onClick={() => props.addToCart(movieData,false)}>Buy</button>
              <button onClick={() => props.addToCart(movieData,true)}>Rent</button>
            </div>
          </div>

          <div className="movie-details">
            <p className="movie-overview">{movieData.overview}</p>
            <p className="movie-info-text">
              Released: {movieData.release_date}
            </p>
            <p className="movie-info-text">
              Runtime: {movieData.runtime} minutes
            </p>
            <p className="movie-info-text">
              Vote Average: {movieData.vote_average}
            </p>
            <p className="movie-info-text">
              Original Language: {movieData.original_language}
            </p>
            <p className="movie-info-text">
              Original Title: {movieData.original_title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
