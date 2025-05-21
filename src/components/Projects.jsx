// src/components/Projects.jsx

import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { projects } from "../data/projects"; // Importing the list of projects
import '../components/css/Projects.css'; // Custom CSS for styling

/**
 * Projects Component
 * Displays a grid of project cards with title, description, technologies, and links.
 */
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="projects-heading">My Projects</h2>

        {/* Responsive layout: 1 column on small screens, 2 on medium, 3 on large */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card className="project-card">
                
                {/* Project image */}
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <Card.Body>
                  {/* Project title */}
                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>

                  {/* Short project description */}
                  <Card.Text>{project.description}</Card.Text>

                  {/* List of technologies or tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button linking to the live project or repo */}
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank" // Opens the link in a new tab
                    className="view-project-btn"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
