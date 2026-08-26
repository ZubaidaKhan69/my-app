import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';
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
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;