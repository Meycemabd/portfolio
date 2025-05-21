import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-5"
      style={{
        backgroundColor: "#0a0f2c",
        color: "#c9d1d9",
      }}
    >
      <Container>
        <h2
          className="fw-bold mb-5"
          style={{
            fontSize: "2.5rem",
            color: "#00FF7F", // Grüner Titel
            position: "relative",
            animation: "slideRight 3s ease-in-out infinite alternate",
          }}
        >
          My Projects
        </h2>

        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card
                className="h-100 shadow-sm text-white"
                style={{ backgroundColor: "#1e2a38" }}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: "cover", height: "180px" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#00FF7F" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge me-1"
                        style={{ backgroundColor: "#495057	" }} 
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                      variant="primary"  
                      href={project.link}
                      target="_blank"
                      style={{
                        fontWeight: "600",
                        letterSpacing: "0.05em",
                      }}
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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

export default Projects;
