// src/components/ExperienceAndEducationSection.jsx

import React from 'react';
import experiences from '../data/experiences'; // Experience data array
import education from '../data/education'; // Education data array
import '../components/css/ExperienceAndEducation.css'; // Custom styles for this section

/**
 * ExperienceAndEducationSection Component
 * Displays two columns: one for professional experience and one for education.
 */
const ExperienceAndEducationSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="row">
          
          {/* === Experience Column === */}
          <div className="col-md-6 mb-5">
            <h2 className="section-title">Experience</h2>

            {/* Map through each experience entry */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="entry-box"
                // Adds a smooth hover effect for a bit of interactivity
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateX(6px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateX(0)')
                }
              >
                <h6 className="entry-title">{exp.title}</h6>
                <p className="entry-sub">{exp.company}</p>
                <small className="entry-date">{exp.date}</small>
              </div>
            ))}
          </div>

          {/* === Education Column === */}
          <div className="col-md-6 mb-5">
            <h2 className="section-title">Education</h2>

            {/* Map through each education entry */}
            {education.map((edu, index) => (
              <div
                key={index}
                className="entry-box"
                // Same hover animation for visual consistency
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateX(6px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateX(0)')
                }
              >
                <h6 className="entry-title">{edu.title}</h6>
                <p className="entry-sub">{edu.institution}</p>
                <small className="entry-date">{edu.date}</small>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducationSection;
