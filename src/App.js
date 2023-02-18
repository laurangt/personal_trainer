import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import AboutMe from './pages/AboutMe';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nutrition" element={<Nutrition />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
