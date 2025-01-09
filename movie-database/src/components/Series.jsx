import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../services/api';


const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch popular movies when the component mounts
  useEffect(() => {
    const fetchSeries = async () => {   // function to make GET request to the popular series endpoint
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/tv/popular`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
          },
        });
        setSeries(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false); 
      }
    };
 // fetch series once when page loads
    fetchSeries();
  }, []);

 /* if (loading) return <p className="text-center text-xl">Loading...</p>;*/
 /* if (error) return <p  className="text-center text-xl text-red-500">{error}</p>;*/

  return (
    <div className="App container mx-auto p-4" id="series">
      <h1  className="text-3xl font-bold text-center text-green-600 mb-8">Popular Series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {series.map((movie) => (
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

export default Series;
