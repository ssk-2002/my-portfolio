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
              description="This is a React web application that utilizes the powerful Clarifai API to detect faces in images provided via URLs. With this app, you can simply enter the URL of an image, and it will accurately identify and highlight any faces present in the image. Additionally, the application keeps track of the total number of entries made by specific users, allowing you to easily view and monitor user activity. It's an intuitive and user-friendly solution for face detection and user entry tracking."
              ghLink="https://github.com/ssk-2002/smart-brain"
              demoLink="https://smartbrainapp-9ppj.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card" style={{fontFamily: "Alegreya, sans-serif"}} >
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualizer"
              description="This app vividly demonstrates the step-by-step sorting process of four popular sorting algorithms. You can witness the algorithms in action as they rearrange and organize data in real-time, providing a visual representation of how each algorithm functions. It's an interactive and educational tool that brings sorting algorithms to life, allowing you to explore and understand their inner workings with ease."
              ghLink="https://github.com/ssk-2002/sorting-visualizer"
              demoLink="https://ssk-2002.github.io/sorting-visualizer/"
            />
          </Col>

          <Col md={4} className="project-card" style={{fontFamily: "Alegreya, sans-serif"}}>
            <ProjectCard
              imgPath={huffman}
              isBlog={false}
              title="TXT Compressor"
              description="By leveraging Huffman coding techniques, the application intelligently reduces the file size while preserving the original data integrity. Whether you need to compress large text files for storage or transmit them more efficiently, this user-friendly tool provides a straightforward solution."
              ghLink="https://github.com/ssk-2002/txt-compressor-huffman"
              demoLink="https://ssk-2002.github.io/txt-compressor-huffman/"          
            />
          </Col>

          <Col md={4} className="project-card" style={{fontFamily: "Alegreya, sans-serif"}}>
            <ProjectCard
              imgPath={robo}
              isBlog={false}
              title="Robo-Friends"
              description="Imagine a Pokémon-like experience where you can explore a variety of unique robot characters. By fetching robots based on special hash values from an API, the app brings these delightful characters to your screen. You can enjoy the excitement of discovering different robots, each with their own special features and traits."
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
