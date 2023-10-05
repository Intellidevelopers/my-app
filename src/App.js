// App.js
import React from 'react';
import './App.css';
import SplashScreen from './SplashScreen';
import MainContent from './MainContent'; // Replace with your main content component

function App() {
  return (
    <div className="app">
      <SplashScreen />
      <MainContent />
    </div>
  );
}

export default App;
