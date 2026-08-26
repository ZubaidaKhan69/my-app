import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { initializeTimes, updateTimes } from './bookingAPI';

function Homepage() {
  return (
    <>
      <Header />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    let success = false;
    if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
      success = window.submitAPI(formData);
    } else {
      success = true; // Fallback for local testing
    }

    if (success) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;