import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies,setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => { 
      const moviesData = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRkYjgyMWQ4NzllMGVkOTYyODlmMjAzMTZjOTFkMyIsInN1YiI6IjY1MjNlMzYzZmQ2MzAwMDEzOWU0OTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.og5zxDtz-s3PxXBKJ3QhNaYiy_ZNJjKLS5bdnqc5Hdk'
    }
  }
  try {
    const response = await axios.request(moviesData);
    setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ maxWidth: '200px' }}
              />
            </li>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </ul>
    </div>
  );
}

export default MovieList;
