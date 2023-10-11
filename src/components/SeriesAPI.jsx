import { useEffect, useState } from "react"
import axios from "axios"


const SeriesAPI = () => {
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
        <div>
      <h1>Series List</h1>
      <ul>
        {series && series.length > 0 ? (
          series.map((series) => (
            <li key={series.id}>
              <h2>{series.title}</h2>
              <p>Release Date: {series.release_date}</p>
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
      </ul>
    </div>
    )
}

export default SeriesAPI