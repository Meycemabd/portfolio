import React from 'react';
import profilePic from '../assets/profile.jpeg';
import { FaJava, FaGitAlt, FaDocker, FaWindows, FaLinux, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiSelenium, SiPostman, SiJira, SiHtml5, SiCss3, SiExpress } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';


const AboutSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#0d1117',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="container text-light">
        <div className="row align-items-center">
          
          <div
            className="col-md-4 text-center mb-4 mb-md-0"
            style={{ marginLeft: '-70px' }}
          >
        

            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: '2.5rem',
                color: '#00FF7F',  
                position: 'relative',
                animation: 'slideRight 3s ease-in-out infinite alternate',
              }}
            >
              About Me
            </h2>
            <img
              src={profilePic}
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                border: '3px solid #00FF7F',
                marginTop: '30px',
              }}
            />
          </div>

          {/* Rechte Seite: Beschreibung und Icons */}
          <div
            className="col-md-8 d-flex flex-column justify-content-start"
            style={{ marginTop: '80px', paddingLeft: '50px' }}
          >
            <p
              style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#c9d1d9',
              }}
            >
            I'm a <span style={{ color: '#00FF7F', fontWeight: '600' }}>dedicated fullstack developer</span> who loves crafting clean, efficient code and bringing ideas to life—from user-friendly frontend experiences to robust backend solutions. I’m passionate about learning new technologies and continuously improving my skills to deliver high-quality software that truly makes a difference.
            </p>


            <p
              className="mt-4 fw-bold"
              style={{ color: '#00FF7F', letterSpacing: '1px' }}
            >
              I use these technologies:
            </p>

            <div className="mt-3">
                  <SiHtml5 size={32} className="me-3 text-danger" title="HTML5" />
                  <SiCss3 size={32} className="me-3 text-primary" title="CSS3" />
                  <FaJs size={32} className="me-3 text-warning" title="JavaScript" />
                  <FaReact size={32} className="me-3 text-info" title="React" />
                  <FaNodeJs size={32} className="me-3 text-success" title="Node.js" />
                  <SiExpress size={32} className="me-3 text-light" title="Express.js" />
                  <FaJava size={32} className="me-3 text-danger" title="Java" />
                  <SiPostgresql size={32} className="me-3 text-info" title="PostgreSQL" />
                  <SiMongodb size={32} className="me-3 text-success" title="MongoDB" />
                  <SiSelenium size={32} className="me-3 text-warning" title="Selenium" />
                  <SiPostman size={32} className="me-3 text-danger" title="Postman" />
                  <FaGitAlt size={32} className="me-3 text-dark" title="Git" />
                  <SiJira size={32} className="me-3 text-primary" title="Jira" />
                  <FaDocker size={32} className="me-3 text-info" title="Docker" />
                  <VscVscode size={32} className="me-3 text-primary" title="VS Code" />
                  <FaWindows size={32} className="me-3 text-primary" title="Windows" />
                  <FaLinux size={32} className="me-3 text-success" title="Linux" />
          </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            left: 0;
          }
          100% {
            left: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
