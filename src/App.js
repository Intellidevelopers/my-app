// src/App.js
import React from 'react';
import './WelcomePage.css'; // You can add global styles here
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import HomePage from './HomePage';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Routes> {/* Use 'Routes' instead of 'Switch' */}
        <Route path="/signup" element={<Signup />} /> {/* Use 'element' prop */}
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
