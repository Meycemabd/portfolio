// AboutSection.js
import React from 'react';
import profilePic from '../assets/profile.jpeg';

// Importing technology icons
import {
  FaJava, FaGitAlt, FaDocker, FaWindows, FaLinux,
  FaJs, FaReact, FaNodeJs
} from 'react-icons/fa';
import {
  SiPostgresql, SiMongodb, SiSelenium, SiPostman, SiJira,
  SiHtml5, SiCss3, SiExpress
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import '../components/css/AboutSection.css';

/**
 * AboutSection component | Provides personal introduction and tech stack overview
 * Includes a profile image, short bio, and icons for technologies used
 */
const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container text-light">
        <div className="row align-items-center">

          {/* Left Column: Heading and Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0 left-col">
            <h2 className="fw-bold mb-3 about-heading">About Me</h2>
            <img
              src={profilePic}
              alt="Profile"
              className="img-fluid rounded-circle shadow about-profile"
            />
          </div>

          {/* Right Column: Bio and Technology Icons */}
          <div className="col-md-8 d-flex flex-column justify-content-start right-col">
            {/* Short personal introduction */}
            <p className="about-description">
              I'm a dedicated
              <span style={{ color: '#00FF7F', fontWeight: '600' }}>
                {' '}Junior Fullstack developer
              </span>
              {' '}who loves crafting clean, efficient code and bringing ideas to life from user friendly frontend experiences to robust backend solutions. <br />
              I’m passionate about learning new technologies and continuously improving my skills to deliver high-quality software that truly makes a difference.
            </p>

            {/* Section title for tech stack */}
            <p className="about-tech-title">I use these technologies:</p>

            {/* Tech Stack Icons */}
            <div className="mt-3">
              {/* Frontend */}
              <SiHtml5 size={32} className="me-3 text-danger" title="HTML5" />
              <SiCss3 size={32} className="me-3 text-primary" title="CSS3" />
              <FaJs size={32} className="me-3 text-warning" title="JavaScript" />
              <FaReact size={32} className="me-3 text-info" title="React" />
              <FaNodeJs size={32} className="me-3 text-success" title="Node.js" />
              <SiExpress size={32} className="me-3 text-light" title="Express.js" />

              {/* Backend & Databases */}
              <FaJava size={32} className="me-3 text-danger" title="Java" />
              <SiPostgresql size={32} className="me-3 text-info" title="PostgreSQL" />
              <SiMongodb size={32} className="me-3 text-success" title="MongoDB" />

              {/* Testing & Tools */}
              <SiSelenium size={32} className="me-3 text-warning" title="Selenium" />
              <SiPostman size={32} className="me-3 text-danger" title="Postman" />
              <FaGitAlt size={32} className="me-3 text-dark" title="Git" />
              <SiJira size={32} className="me-3 text-primary" title="Jira" />
              <FaDocker size={32} className="me-3 text-info" title="Docker" />
              <VscVscode size={32} className="me-3 text-primary" title="VS Code" />

              {/* Operating Systems */}
              <FaWindows size={32} className="me-3 text-primary" title="Windows" />
              <FaLinux size={32} className="me-3 text-success" title="Linux" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
