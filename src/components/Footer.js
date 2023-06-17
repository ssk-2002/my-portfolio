import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer" style={{fontFamily: "Alegreya"}}>
      <Row>
        <Col className="footer-copywright" style={{ display: "flex", justifyContent: "flex-start" }}>
          <h3>Salman Shaikh | Portfolio </h3>
        </Col>
        <Col className="footer-body" style={{ display: "flex", justifyContent: "flex-end" }}>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ssk-2002"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/salman-shaikh-82989b1b9/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
              <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100040826617718"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <FaFacebook />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
