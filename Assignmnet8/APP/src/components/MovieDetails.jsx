// src/components/MovieDetails.jsx
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // If the movie data isn’t passed via state, use fallback values.
  const movie = location.state?.movie || {
    id,
    title: `Movie ${id}`,
    description: 'This is a placeholder description for the movie.',
    image: `https://via.placeholder.com/300?text=Movie+${id}`,
  };

  const handleBookSeat = () => {
    // Navigate to the booking form page, passing the movie details in state.
    navigate('/book', { state: { movie } });
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{movie.description}</p>
      <button onClick={handleBookSeat}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
