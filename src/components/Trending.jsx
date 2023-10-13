import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/Trending.css';
import MovieInfo from '../pages/MovieInfo';

const Trending = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = '6e8f505c75786ea1c4d7fa68159ede64';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey);

        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av filmer');
        }

        const data = await response.json();

        console.log('API Response:', data);

        if (data && data.results && Array.isArray(data.results)) {
          setMovieData(data.results);
        } else {
          console.error('API Response is not as expected:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const navigateToMovieInfo = (movie) => {
    setSelectedMovie(movie); 
  };

  return (
    <section className='trending-section'>
      <div className='trending-list'>
        {movieData.map((movie, index) => (
          <div key={index} className='trending-item'>
            <Link to={`/movieinfo/${movie.id}`}> 
              <img
                id="trending-img"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigateToMovieInfo(movie)} 
              />
            </Link>
          </div>
        ))}
      </div>
      {selectedMovie && <MovieInfo movieData={selectedMovie} />}
    </section>
  );
};

export default Trending;
