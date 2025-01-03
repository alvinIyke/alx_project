import React, { useState, useEffect } from 'react';
import axios from 'axios';

//TMDb API key
const API_KEY = 'f76055305518a8c6392aa20a8f215f24';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieGrid = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch popular movies when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {   // function to make GET request to the popular movie endpoint
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
 // fetch movies once when page loads
    fetchMovies();
  }, []);

 /* if (loading) return <p className="text-center text-xl">Loading...</p>;*/
 /* if (error) return <p  className="text-center text-xl text-red-500">{error}</p>;*/

  return (
    <div className="App container mx-auto p-4">
      <h1  className="text-3xl font-bold text-center text-green-600 mb-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item  bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 p-4">{movie.title}</h2>
            <p className="text-sm text-gray-600 p-4">{movie.release_date}</p>
            <p className="text-sm text-gray-500 mt-2 p-4">{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
