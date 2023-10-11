import React, { useEffect, useState } from 'react';
import '../Styles/Trending.css'

const Trending = (props) => {
    const [movieData, setMovieData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const apiKey = '6e8f505c75786ea1c4d7fa68159ede64';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=' + apiKey);

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

   



    return (
        <section className='trending-section'>


            <div className='trending-list'>
                {movieData
                    .filter((movie) =>
                        movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((movie, index) => (
                        <div key={index} className='movie-item'>
                            <h4>{movie.title}</h4>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                alt={movie.title}
                            />
                            
                        </div>
                    ))}
            </div>
            
        </section>
    );
};

export default Trending;