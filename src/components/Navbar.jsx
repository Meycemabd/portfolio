import React from 'react';
import '../components/css/Navbar.css'; 

const Navbar = () => {
  return (
    // Navigation Bar Wrapper
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo: Link zur Startseite */}
        <a className="navbar-brand nav-link logo-link" href="/">
          <span className="logo-text" role="img" aria-label="code">
            {/* SVG Icon im Logo mit grünem Farbton */}
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#00ff7f">
              <path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/>
            </svg>
            MeycemDev
          </span>
        </a>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
            {/* Einzelner Navigationspunkt */}
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
