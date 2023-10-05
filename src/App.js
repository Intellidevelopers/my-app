import React from 'react';
import './WelcomePage.css'; // You can add global styles here
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import HomePage from './HomePage';
import bannerHumanImage from './assets/banner-human.png'; // Import the image

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
      </Routes>
      
      {/* Use the imported image */}
      <img src={bannerHumanImage} alt="Banner Human" />
        <button>Get Started</button>
    </Router>
  );
}

export default App;