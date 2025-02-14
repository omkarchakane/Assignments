// src/components/BookingConfirmation.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId, formData, movie } = location.state || {};

  if (!bookingId || !formData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>No booking details found.</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }

  const containerStyle = {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2>Seat Booked Successfully!</h2>
      <p>
        <strong>Booking ID:</strong> {bookingId}
      </p>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Mobile:</strong> {formData.mobile}
      </p>
      {movie && movie.title && (
        <p>
          <strong>Movie:</strong> {movie.title}
        </p>
      )}
      <button onClick={() => navigate('/')}>Back to Movie List</button>
    </div>
  );
};

export default BookingConfirmation;
