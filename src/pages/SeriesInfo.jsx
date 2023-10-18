import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/SeriesInfo.css";

const SeriesInfo = (props) => {
  const { seriesId } = useParams();
  const [seriesData, setSeriesData] = useState(null);

  useEffect(() => {
    const apiKey = "6e8f505c75786ea1c4d7fa68159ede64";

    const fetchSeriesData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av seriedata");
        }

        const data = await response.json();

        setSeriesData(data);
      } catch (error) {
        console.error("Fel vid hämtning av seriedata:", error);
      }
    };

    fetchSeriesData();
  }, [seriesId]);

  if (seriesData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="serie-info">
      <div className="backdrop-container">
        <img
          id="backdrop-img"
          src={`https://image.tmdb.org/t/p/w1280${seriesData.backdrop_path}`}
          alt={`${seriesData.name} Backdrop`}
        />
      </div>

      <div className="serie-content">
        <h1 className="serie-info-title">{seriesData.name}</h1>

        <div className="serie-details-container">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w300${seriesData.poster_path}`}
              alt={seriesData.name}
            />
            <div className="buttons-container">
              <button onClick={() => props.addToCart(seriesData)}>Buy</button>
              <button>Rent</button>
            </div>
          </div>

          <div className="serie-details">
            <p className="serie-overview">{seriesData.overview}</p>
            <p className="serie-info-text">
              First Air Date: {seriesData.first_air_date}
            </p>
            <p className="serie-info-text">
              Number of Seasons: {seriesData.number_of_seasons}
            </p>
            <p className="serie-info-text">
              Vote Average: {seriesData.vote_average}
            </p>
            <p className="serie-info-text">
              Original Language: {seriesData.original_language}
            </p>
            <p className="serie-info-text">
              Original Name: {seriesData.original_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesInfo;
