import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import AboutMe from './pages/AboutMe';
import ProgramShow from './pages/ProgramShow';
import BundleShow from './pages/BundleShow';
import CoachingShow from './pages/CoachingShow';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nutrition" element={<Nutrition />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/program/:slug" element={<ProgramShow />} />
        <Route exact path="/bundle/:slug" element={<BundleShow />} />
        <Route exact path="/coaching/:slug" element={<CoachingShow />} />
      </Routes>
    </Router>
  );
}

export default App;
