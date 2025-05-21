import React from 'react';
import experiences from '../data/experiences';
import education from '../data/education';

const ExperienceAndEducationSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#0d1117',
        padding: '80px 0',
      }}
    >
      <div className="container">
        <div className="row">
          {/* Experience Spalte */}
          <div className="col-md-6 mb-5">
            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: '2rem',
                color: '#00FF7F',
                animation: 'slideRight 3s ease-in-out infinite alternate',
                position: 'relative'
              }}
            >
              Experience
            </h2>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-3 p-3 shadow rounded"
                style={{
                  backgroundColor: '#161b22',
                  borderLeft: '4px solid #00FF7F',
                  color: '#c9d1d9',
                  transition: 'transform 0.3s',
                  cursor: 'default',
                  maxWidth: '90%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <h6 className="fw-bold mb-1" style={{ color: '#ffffff' }}>{exp.title}</h6>
                <p className="mb-0" style={{ color: '#aaaaaa' }}>{exp.company}</p>
                <small style={{ color: '#888' }}>{exp.date}</small>
              </div>
            ))}
          </div>

          {/* Education Spalte */}
          <div className="col-md-6 mb-5">
            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: '2rem',
                color: '#00FF7F',
                animation: 'slideRight 3s ease-in-out infinite alternate',
                position: 'relative'
              }}
            >
              Education
            </h2>

            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-3 p-3 shadow rounded"
                style={{
                  backgroundColor: '#161b22',
                  borderLeft: '4px solid #00FF7F',
                  color: '#c9d1d9',
                  transition: 'transform 0.3s',
                  cursor: 'default',
                  maxWidth: '90%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <h6 className="fw-bold mb-1" style={{ color: '#ffffff' }}>{edu.title}</h6>
                <p className="mb-0" style={{ color: '#aaaaaa' }}>{edu.institution}</p>
                <small style={{ color: '#888' }}>{edu.date}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideRight {
          0% {
            left: 0;
          }
          100% {
            left: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceAndEducationSection;
