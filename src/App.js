// Signup.js
import React, { useState } from 'react';
import './App.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup submitted:', username, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br/>
        <h2>Signup</h2>
        <div>
          <input
            type="text"
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <p>Don't have an account?</p>
      </form>
    </div>
  );
};

export default Signup;
