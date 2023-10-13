import { useEffect, useState } from "react";
import "../styles/Series.css";
import Poster1 from "../assets/poster1.jpg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios";

const Series = () => {
 const [showGenres, setShowGenres] = useState(false);
 const [genres, setGenres] = useState([]);

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

 const [series, setSeries] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const seriesData = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/tv',
                params: {
                include_adult: 'false',
                include_null_first_air_dates: 'false',
                language: 'en-US',
                page: '1',
                sort_by: 'popularity.desc'
                 },
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRkYjgyMWQ4NzllMGVkOTYyODlmMjAzMTZjOTFkMyIsInN1YiI6IjY1MjNlMzYzZmQ2MzAwMDEzOWU0OTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.og5zxDtz-s3PxXBKJ3QhNaYiy_ZNJjKLS5bdnqc5Hdk'
                }
                };  
            try {
                const response  = await axios.request(seriesData); 
                setSeries(response.data.results);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }, []);


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
          <span className="arrow-icon"><ArrowDropDownIcon/></span>
          {showGenres && (
            <ul>
               {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
            </ul>
          )}
        </div>
      </div>

      <div className="serie-list">
        {series && series.length > 0 ? (
          series.map((series) => (
            <li key={series.id} className="serie-item">
              <h2>{series.title}</h2>
              {/* <p>Release Date: {series.release_date}</p> */}
              <img
                src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                alt={series.title}
                style={{ maxWidth: '200px' }}
              />
            </li>
          ))
        ) : (
          <p>No series found.</p>
        )}
      </div>
    </div>
  );
};

export default Series
