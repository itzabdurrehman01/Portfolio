import React from 'react';
import { Link } from 'react-router-dom';
import { GiLaptop } from 'react-icons/gi'; // Import the GiLaptop icon

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <GiLaptop className="logo" /> {/* Display the GiLaptop icon as the logo */}
        <h2>MUHAMMAD ABDUR REHMAN</h2>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
