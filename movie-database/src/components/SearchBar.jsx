import React, { useState } from 'react';
import axios from 'axios';
import { API_KEY } from "../services/api.js"

//const API_KEY = 'f76055305518a8c6392aa20a8f215f24';
const BASE_URL = 'https://api.themoviedb.org/3';

function SearchBar(){
const [movies, setMovies] = useState([]);  
const [searchQuery, setSearchQuery] = useState(''); // Holds value of input field as user types
const [searching, setSearching] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

console.log(movies)
  
 const searchMovies = async () => {
    if (!searchQuery) {
      return; // Don't search if query is empty
    }

    setSearching(true);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${BASE_URL}/search/multi?include_adult=false&language=en-US&page=1&query=${searchQuery}`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          language: 'en-US',
          page: 1,
        },
      });

      setMovies(response.data.results);
      setLoading(false);
      setSearching(false);
    } catch (err) {
      setError('Failed to fetch search results');
      setLoading(false);
      setSearching(false);
    }
  };
    //updates the searchQuery as the user types 
    const handleSearchChange = (e) => {
      !e.target.value && setMovies([])
    setSearchQuery(e.target.value);
  };
   //triggers the search when user hits search button
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

 /* if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-xl text-red-500">{error}</p>;
*/
  return (
    <div className="App container mx-auto p-4">

      <div className="mb-8 flex justify-center">
        <form onSubmit={handleSearchSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </form>
      <button
        onClick={searchMovies}
        className="px-4 py-4 text-center mb-6 bg-green-600 hover:bg-green-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Search
      </button>
      </div>
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
      { searching && <p className="text-center text-xl mt-4">Searching...</p> }
    </div>  
);
}
export default SearchBar;
    