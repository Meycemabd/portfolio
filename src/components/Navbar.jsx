import React from 'react';
import '../components/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/*<img
            src="/logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          */}
          <span className="fw-bold">Meycem</span>
        </a>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
            <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacts</a></li>
          </ul>
        </div>
        <button className="btn btn-outline-light">Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;