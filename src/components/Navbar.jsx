// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#top" className="navbar-brand">SkillPath Tracker</a>
        <ul className="navbar-links">
          <li><a href="#add-roadmap" className="navbar-link">Add Roadmap</a></li>
          <li><a href="#your-roadmaps" className="navbar-link">Your Roadmaps</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;