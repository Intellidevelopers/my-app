// SplashScreen.js
import React, { useEffect, useState } from 'react';
import './SplashScreen.css'; // You can create a CSS file for styling

function SplashScreen() {
  // Add a state variable to track when the splash screen should be hidden
  const [hideSplash, setHideSplash] = useState(false);

  // Simulate a delay for the splash screen (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideSplash(true);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${hideSplash ? 'hidden' : ''}`}>
      <img src="./assets/banner-human.png" alt='imsplsh'/>
    </div>
  );
}

export default SplashScreen;
