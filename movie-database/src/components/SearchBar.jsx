import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '&api_key=e82851bccb823fad06989d22f76869b8';
const BASE_URL = 'https://api.themoviedb.org/3';


const [searchQuery, setSearchQuery] = useState('');
const [searching, setSearching] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


  
export const searchMovies = async () => {
    if (!searchQuery) {
      return; // Don't search if query is empty
    }

    setSearching(true);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
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
    setSearchQuery(e.target.value);
  };
   //triggers the search when user hits search button
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-xl text-red-500">{error}</p>;

  return (
    <div className="App container mx-auto p-4">

      <div className="mb-8 flex justify-center">
        <form onSubmit={handleSearchSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
      <button
        onClick={searchMovies}
        className="px-4 py-2 text-center mb-6 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Search
      </button>
      </div>
    </div>  
)
    