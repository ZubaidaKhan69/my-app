import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

function Homepage() {
  return (
    <>
      <Header />
      <Main />
      <Testimonials />
      <About />
    </>
  );
}

function BookingPage() {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1>Reserve a Table</h1>
      <p>Booking form coming soon!</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;