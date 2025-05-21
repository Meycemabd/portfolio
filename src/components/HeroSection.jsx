// HeroSection.js
import React from 'react';
import '../components/css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-start align-items-center text-center">
      <div className="container">
        <h1 className="hero-title">Hi, I'm <span style={{ color: '#00FF7F' }}>Meycem El Abed</span></h1>
        <h2 className="hero-subtitle">Junior Developer with a focus on Frontend and Backend</h2>
        <p className="hero-description">
        I develop high-performance, scalable web applications using the latest technologies to deliver exceptional user experiences.        </p>
        <div className="hero-buttons mt-4">
          <a href="#projects" className="btn btn-primary btn-lg me-3">View Projects</a>
          <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
