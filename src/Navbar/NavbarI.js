import React, { useState } from 'react';
import './NavbarI.css';
import { Link } from 'react-router-dom';

const NavbarI = () => {
  const [role, setRole] = useState('Job Seeker');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const handleRoleToggle = () => {
    setRole(prevRole => (prevRole === 'Job Seeker' ? 'Owner' : 'Job Seeker'));
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <Link to="#" className="navbar-logo">
        <img src="https://cdn3.vectorstock.com/i/1000x1000/74/47/job-portal-logo-design-template-concept-vector-37017447.jpg" alt="Logo" />
        Staff-Connect
      </Link>
      {/* Hamburger menu button */}
      <div className="toggle-menu" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      {/* Navbar links */}
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/arigato">About us</Link>
        <Link to="/ContactUs">Contact us</Link>
        <Link to="/login">Login/Signup</Link>
        <div className="toggle-bar" onClick={handleRoleToggle}>
          <p1>Are you a </p1>
          <div className={`toggle-button ${role === 'Job Seeker' ? 'active' : ''}`}>
            <p3><Link to='/'>Job Seeker</Link></p3>
          </div>
          or
          <div className={`toggle-button ${role === 'Owner' ? 'active' : ''}`}>
            <Link to='/IndexO'>Owner</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarI;
