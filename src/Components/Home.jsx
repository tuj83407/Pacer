// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import './Home.css'; // Optional: Create a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the homepage. You can view my resume by clicking the button below.</p>
      <Link to="/resume">
        <button className="resume-button">View My Resume</button>
      </Link>
      <p>Pacer Code Test</p>
      <Link to="/PacerHome">
        <button className="PacerHome">PacerHome</button>
      </Link>
    </div>
  );
};

export default Home;
