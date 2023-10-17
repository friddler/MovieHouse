import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Styles/SeriesInfo.css';

const SeriesInfo = (props) => {
    const { seriesId } = useParams();
    const [seriesData, setSeriesData] = useState(null);

    useEffect(() => {
        const apiKey = '6e8f505c75786ea1c4d7fa68159ede64';

        const fetchSeriesData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`);

                if (!response.ok) {
                    throw new Error('Något gick fel vid hämtning av seriedata');
                }

                const data = await response.json();

                setSeriesData(data);
            } catch (error) {
                console.error('Fel vid hämtning av seriedata:', error);
            }
        };

        fetchSeriesData();
    }, [seriesId]);

    if (seriesData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className='series-info'>
            <img id="backdrop-img" src={`https://image.tmdb.org/t/p/w1280${seriesData.backdrop_path}`} alt={`${seriesData.title} Backdrop`} />
            <h1>{seriesData.name}</h1>
            <p>{seriesData.overview}</p>
            <p>First Air Date: {seriesData.first_air_date}</p>
            <p>Number of Seasons: {seriesData.number_of_seasons}</p>
            <p>Vote Average: {seriesData.vote_average}</p>
            <p>Original Language: {seriesData.original_language}</p>
            <p>Original Title: {seriesData.original_name}</p>
            <img src={`https://image.tmdb.org/t/p/w300${seriesData.poster_path}`} alt={seriesData.name} />
            <button onClick={() => props.addToCart(seriesData)}>Buy</button>
            <button>Rent</button>
        </div>
    );
};

export default SeriesInfo;
