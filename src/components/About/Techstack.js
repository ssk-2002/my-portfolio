import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiJava, DiAndroid } from "react-icons/di";
import { SiC, SiHtml5, SiCss3, SiMysql, SiPostgresql, SiDart, SiFlutter } from "react-icons/si";
import { FaDatabase } from 'react-icons/fa';


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"> <SiC /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <CgCPlusPlus /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <DiJava /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <DiPython /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <DiJavascript1 /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"> <SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"> <DiNodejs /> </Col> 
      <Col xs={4} md={2} className="tech-icons"> <DiReact /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <DiGit /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <FaDatabase /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiMysql /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiPostgresql /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <DiAndroid /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiDart /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiFlutter /> </Col>
    </Row>
  );
}

export default Techstack;
