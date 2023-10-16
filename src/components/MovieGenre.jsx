import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieGenres = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: { language: 'en' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRkYjgyMWQ4NzllMGVkOTYyODlmMjAzMTZjOTFkMyIsInN1YiI6IjY1MjNlMzYzZmQ2MzAwMDEzOWU0OTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.og5zxDtz-s3PxXBKJ3QhNaYiy_ZNJjKLS5bdnqc5Hdk',
          },
        });
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  

  return (
    <div>
      <h1>Movie Genres</h1>
      <label htmlFor="genreDropdown">Select a Genre:</label>
      <select id="genreDropdown" onChange={handleGenreChange} value={selectedGenre}>
        <option value="" disabled>Select a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

      {selectedGenre && (
        <div>
          <h2>Movies in the {genres.find((genre) => genre.id === parseInt(selectedGenre, 10)).name} Genre</h2>
          {/* display movies according to genre */}
        </div>
      )}
    </div>
  );
};

export default MovieGenres;
