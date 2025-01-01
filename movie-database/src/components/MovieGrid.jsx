import React from 'react';

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

export default MovieGrid; 



