import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import huffman from "../../Assets/Projects/huffman.png";
import robo from "../../Assets/Projects/robo.png";
import smart from "../../Assets/Projects/smart.png";
import sorting from "../../Assets/Projects/sorting.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{fontFamily: "Alegreya, sans-serif"}}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", fontFamily: "Alegreya, sans-serif", fontSize:"18px" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{fontFamily: "Alegreya, sans-serif"}}>
            <ProjectCard
              imgPath={smart}
              isBlog={false}
              title="Smart-Brain"
              description="A React web-app that uses Clarifai API to detect faces in provided images (through URLs) and also displays the total entry count for specific users"
              ghLink="https://github.com/ssk-2002/smart-brain"
              demoLink="https://smartbrainapp-9ppj.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card" style={{fontFamily: "Alegreya, sans-serif"}} >
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualizer"
              description="A React Frontend Web App that displays the sorting process of 4 Sorting Agorithms with the help of animation "
              ghLink="https://github.com/ssk-2002/sorting-visualizer"
              demoLink="https://ssk-2002.github.io/sorting-visualizer/"
            />
          </Col>

          <Col md={4} className="project-card" style={{fontFamily: "Alegreya, sans-serif"}}>
            <ProjectCard
              imgPath={huffman}
              isBlog={false}
              title="TXT Compressor"
              description="This web application helps in compressing and de-compressing .txt files using Huffman Algorithm"
              ghLink="https://github.com/ssk-2002/txt-compressor-huffman"
              demoLink="https://ssk-2002.github.io/txt-compressor-huffman/"          
            />
          </Col>

          <Col md={4} className="project-card" style={{fontFamily: "Alegreya, sans-serif"}}>
            <ProjectCard
              imgPath={robo}
              isBlog={false}
              title="Robo-Friends"
              description="A simple React web-app that fetches Random Robots (using hashes) from an API to render them and gives us a search bar to filter the result"
              ghLink="https://github.com/ssk-2002/robofriends"
              demoLink="https://ssk-2002.github.io/robofriends/"          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
