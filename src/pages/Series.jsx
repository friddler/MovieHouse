import { useEffect, useState } from "react";
import "../styles/Series.css";
import { Link } from 'react-router-dom'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios";

const Series = () => {
 const [showGenres, setShowGenres] = useState(false);
 const [genres, setGenres] = useState([]);
 const [selectedGenre, setSelectedGenre] = useState(null);
 const [series, setSeries] = useState([])
 const [currentPage, setCurrentPage] = useState(1);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/genre/tv/list', {
        params: { language: 'en' },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRkYjgyMWQ4NzllMGVkOTYyODlmMjAzMTZjOTFkMyIsInN1YiI6IjY1MjNlMzYzZmQ2MzAwMDEzOWU0OTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.og5zxDtz-s3PxXBKJ3QhNaYiy_ZNJjKLS5bdnqc5Hdk'
        },
      });
      setGenres(response.data.genres);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []); 

    useEffect(() => {
        const fetchData = async () => {
            const seriesData = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/tv',
                params: {
                include_adult: 'false',
                include_null_first_air_dates: 'false',
                language: 'en-US',
                page: currentPage,
                sort_by: 'popularity.desc',
                ...(selectedGenre && { with_genres: selectedGenre })
                 },
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRkYjgyMWQ4NzllMGVkOTYyODlmMjAzMTZjOTFkMyIsInN1YiI6IjY1MjNlMzYzZmQ2MzAwMDEzOWU0OTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.og5zxDtz-s3PxXBKJ3QhNaYiy_ZNJjKLS5bdnqc5Hdk'
                }
                };  
            try {
                const response  = await axios.request(seriesData); 
                setSeries((prevSeries) => [...prevSeries, ...response.data.results]);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }, [currentPage, selectedGenre]);

        const handleGenreSelection = (genreId) => {
          setSelectedGenre(genreId);
          setSeries([]);
          setCurrentPage(1);
        };
      
        const loadMore = () => {
          setCurrentPage((prevPage) => prevPage + 1);
        };

        const filteredSeries = selectedGenre
        ? series.filter((series) =>
            series.genre_ids.includes(selectedGenre))
        : series;

  return (
    <div className="series-container">
      <div className="serie-header">
        <h1>Series</h1>
        <div
          className="genre-drop"
          onMouseEnter={() => setShowGenres(true)}
          onMouseLeave={() => setShowGenres(false)}
        >
          Genre
          <span className="arrow-icon">
            <ArrowDropDownIcon/>
            </span>
          {showGenres && (
            <ul>
              {genres.map((genre) => (
          <li key={genre.id} onClick={() => handleGenreSelection(genre.id)}>
            {genre.name}
          </li>
        ))}
            </ul>
          )}
        </div>
      </div>

      <div className="serie-list">
      {filteredSeries && filteredSeries.length > 0 ? (
          filteredSeries.map((series, index) => (
            <li key={series.id} className="serie-item">
              <h2>{series.title}</h2>
              {/* <p>Release Date: {series.release_date}</p> */}
              <Link to={`/seriesinfo/${series.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                alt={series.title}
                style={{ maxWidth: '200px' }}
              />
              </Link>
            </li>
          ))
        ) : (
          <p>No series found.</p>
        )}
      </div>
      <div className="loadButtonDiv">
      <button className="loadButton" onClick={loadMore} >Load More</button>
    </div>
    </div>
  );
};

export default Series
