// src/components/MovieList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSBA3dGLs178d3WiW6M34_SNs5ueN5LLTowYrCnKutYyJh07QiGTs7BPoO6rdt5esVaYHH2zZVRErNCFMVPHjNxOSYOUw4gDbWtZySL8Zrrx9LmDQ3jFAk0Yu0YBU9240_WiV7LK55A1w/s1600/Make+Creative+Movie+Poster+With+Dark+and+Red+Tone+in+Photoshop+CC.jpg' },
  { id: 2, title: 'Movie 2', image: 'https://i.pinimg.com/736x/89/5d/24/895d2482fd516e809023ef09d599769f.jpg' },
  { id: 3, title: 'Movie 3', image: 'https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg' },
  { id: 4, title: 'Movie 4', image: 'https://i2.wp.com/www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/03/Beekeeper-poster.jpg?ssl=1' },
  
];

const MovieList = () => {
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    // Navigate to the movie details page and pass the movie object in state
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '20px',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Movie List</h1>
      <div style={gridStyle}>
        {movies.map((movie) => (
          <div key={movie.id} style={cardStyle} onClick={() => handleMovieClick(movie)}>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
