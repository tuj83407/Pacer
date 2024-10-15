// src/Components/Header.jsx
import React, { useState } from 'react';
import './Header.css'; // Optional: Create a CSS file for styling

const Header = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Call the login function passed down from the parent component
    onLogin(email, password);
  };

  return (
    <header className="header">
      <h1 className="header-title">Sales Dashboard</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </header>
  );
};

export default Header;
