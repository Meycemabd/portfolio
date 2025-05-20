import React from 'react';
import profilePic from '../assets/profile.jpeg';
import { FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiHtml5, SiCss3 } from 'react-icons/si';

const AboutSection = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: '#0d1117', marginTop: '0px' }}
    >
      <div className="container text-light">
        <div className="row align-items-start">

          {/* Linke Seite: About Me und Bild 70px nach links, Überschrift größer, 20px nach unten */}
          <div
            className="col-md-4 text-center mb-4 mb-md-0"
            style={{ marginLeft: '-70px', marginTop: '20px' }}
          >
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: '2.5rem' }}
            >
              About Me
            </h2>
            <img
              src={profilePic}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                border: '2px solid #fff',
                marginTop: '30px',
              }}
            />
          </div>


          <div
            className="col-md-8 d-flex flex-column justify-content-start"
            style={{ marginTop: '130px', paddingLeft: '50px' }}
          >
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              I'm a passionate frontend developer with a keen eye for detail and
              a love for clean, efficient code. I enjoy bringing designs to life
              in the browser and continuously learning new technologies.
            </p>

            <p className="mt-4 fw-bold">I use these technologies:</p>

            <div className="mt-2">
              <FaReact size={30} className="me-3 text-info" />
              <FaJs size={30} className="me-3 text-warning" />
              <FaNodeJs size={30} className="me-3 text-success" />
              <SiExpress size={30} className="me-3 text-light" />
              <SiHtml5 size={30} className="me-3 text-danger" />
              <SiCss3 size={30} className="me-3 text-primary" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
