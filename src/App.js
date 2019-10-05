import React from 'react';
import './app.css';
import Header from './components/Header';
import HotelDetails from './components/HotelDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <HotelDetails></HotelDetails>
      <Footer></Footer>
    </div>
  );
}

export default App;
