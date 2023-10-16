import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Search.css';
import { Link } from 'react-router-dom'; 


const Search = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = '6e8f505c75786ea1c4d7fa68159ede64';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${apiKey}&query=${searchTerm}`);

        if (response.status !== 200) {
          throw new Error('Något gick fel vid hämtning av filmer');
        }

        const data = response.data;

        if (data && data.results && Array.isArray(data.results)) {
          setMovieData(data.results);
        } else {
          console.error('API Response is not as expected:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchTerm !== '') {
      fetchMovies();
    }
  }, [searchTerm, apiKey]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <h3 id="utforska">Utforska</h3>
      <input
        type="text"
        placeholder="Sök efter filmer..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="search-list">
        {movieData.map((movie, index) => (
          <div key={index} className="movie-card">
            <Link to={`/movieinfo/${movie.id}`}>
            <img
              src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : "image.png" 
                
              }
              alt={movie.title}
              className={movie.poster_path ? "movie-image" : "default-image"}

              onError={(e) => {
                e.target.style.display = 'none'; 
              }}
            />
            </Link>
            {(!movie.poster_path && movie.title) && (
              <div className="movie-title">{movie.title}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  

};

export default Search;
