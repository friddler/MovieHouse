import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/MovieInfo.css';

const MovieInfo = (props) => {
    const { movieId } = useParams(); // Ta emot movieId från sökvägen
    const [movieData, setMovieData] = useState(null); // State för att lagra filminformation
    const apiKey = '6e8f505c75786ea1c4d7fa68159ede64';

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
                console.log(response);

                if (!response.ok) {
                    throw new Error('Något gick fel vid hämtning av filmdata');
                }

                const data = await response.json();

                console.log('Filmdata:', data);

                setMovieData(data);
            } catch (error) {
                console.error('Fel vid hämtning av filmdata:', error);
            }
        };

        fetchMovieData();
    }, [apiKey, movieId]);

    if (movieData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className='movie-info'>
            <img id="backdrop-img" src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`} alt={`${movieData.title} Backdrop`} />
            <h1>{movieData.title}</h1>
            <p>{movieData.overview}</p>
            <p>Released: {movieData.release_date}</p>
            <p>Runtime: {movieData.runtime} minutes</p>
            <p>Vote Average: {movieData.vote_average}</p>
            <p>Original Language: {movieData.original_language}</p>
            <p>Original Title: {movieData.original_title}</p>
            <img src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt={movieData.title} />
            {/* Lägg till fler element för att visa önskad filminformation */}
            <button onClick={()=> props.addToCart(movieData)}>Buy</button>
            <button>rent</button>
        </div>
    );
}

export default MovieInfo;
