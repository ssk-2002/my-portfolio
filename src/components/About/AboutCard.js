import React from "react";
import Card from "react-bootstrap/Card";
import { ImDiamonds } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontFamily: "Alegreya, sans-serif"}}>
            Hey there! I'm <span className="purple"> Salman Shaikh</span>, a tech enthusiast and software developer. 
            I recently graduated with a Bachelor's degree in Information Technology from <span className="purple"> Jadavpur University</span> in 2023. 
            Currently, I work as a Software Developer at <span className="purple">TATA Digital</span>.
            <br/> <br/>
            When I'm not coding, you'll find me enjoying a few of my favorite activities, like -
          </p>
          <ul style={{fontFamily: "Alegreya, sans-serif"}}>
            <li className="about-activity">
              <ImDiamonds /> Playing Games
            </li>
            <li className="about-activity">
              <ImDiamonds /> Writing Tech Articles 
            </li>
            <li className="about-activity">
              <ImDiamonds /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
