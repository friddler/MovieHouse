import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Search.css";
import { Link } from "react-router-dom";

const Search = (props) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "6e8f505c75786ea1c4d7fa68159ede64";

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const movieResponse = axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
        );
        const seriesResponse = axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchTerm}`
        );

        const responses = await Promise.all([movieResponse, seriesResponse]);
        const combinedData = [
          ...responses[0].data.results,
          ...responses[1].data.results,
        ];

        //Detta filtrerar bort alla filmer och serier som inte har en poster_path
        const filteredData = combinedData.filter((item) => item.poster_path);

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchTerm !== "") {
      fetchMedia();
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
        placeholder="Sök efter filmer och serier..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="search-list">
        {data.map((item, index) => (
          <div key={index} className="media-card">
            <Link to={`/${item.title ? "movieinfo" : "seriesinfo"}/${item.id}`}>
              <img
                src={
                  `https://image.tmdb.org/t/p/w300${item.poster_path}`
                }
                alt={item.title || item.name}
                className="media-image"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </Link>
            {item.title || item.name && (
              <div className="media-title">{item.title || item.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
