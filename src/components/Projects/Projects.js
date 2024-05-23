import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import places from "../../Assets/Projects/1.png";
import jitter from "../../Assets/Projects/2.png";
import weather from "../../Assets/Projects/3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={places}
              isBlog={false}
              title="MyPlaces App"
              description="React-based backend Application.
              Empowers users to securely authenticate, post,
              edit, and delete personal places, offering a
              seamless map view experience. Facilitates
              exploration of other users' locations.
              "
             
              demoLink="https://visit7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jitter}
              isBlog={false}
              title="Jitter -A Twitter Lookalike"
              description="A Django-driven Social Media App
              A vibrant social media app resembling,
              ensuring smooth user authentication, posting,
              liking, and various interactive features, all
              wrapped in an intuitive and visually appealing
              user interface."
  
              demoLink="https://github.com/Sakeths2004/Jitter.git"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="API-Powered Weather App"
              description="API-based Weather App for real-time weather
              updates Developed a web application utilizing the
              OpenWeatherMap API to provide real-time
              weather updates for any location searched by
              the user.
              "
          
              demoLink="https://sakeths2004.github.io/WeatherApp/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
