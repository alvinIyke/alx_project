/*import React from 'react';
import axios from 'axios';

const API_IMG="https://image.tmdb.org/t/p/w500";

const MovieGrid = () =>{
    
    return(
        <div>
            <h1> { title }</h1>
            <img src={API_IMG + poster_path} />
            <h4></h4>
        </div>
    )
}

export default MovieGrid; */



import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Replace with your TMDb API key
const API_KEY = '&api_key=e82851bccb823fad06989d22f76869b8';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch popular movies when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
          },
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
