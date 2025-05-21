// HeroSection.js
import React from 'react';
import '../components/css/HeroSection.css';

/**
 * HeroSection component | Introductory landing section
 * Displays greeting, professional summary, and call-to-action buttons
 */
const HeroSection = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-start align-items-center text-center">
      <div className="container">
        {/* Main heading with highlighted name */}
        <h1 className="hero-title">
          Hi, I'm <span style={{ color: '#00FF7F' }}>Meycem El Abed</span>
        </h1>

        {/* Subtitle describing the developer's focus */}
        <h2 className="hero-subtitle">
          Junior Web Developer with a focus on Frontend and Backend
        </h2>

        {/* Brief description of skills and approach */}
        <p className="hero-description">
          I develop high-performance, scalable web applications using the latest technologies to deliver exceptional user experiences.
        </p>

        {/* Navigation buttons linking to projects and contact sections */}
        <div className="hero-buttons mt-4">
          <a href="#projects" className="btn btn-primary btn-lg me-3">View Projects</a>
          <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
