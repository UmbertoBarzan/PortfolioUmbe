import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/whoami.png";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      introHeading: (
        <>
          Know Who <strong className="purple">I'M</strong>
        </>
      ),
      skillHeading: (
        <>
          Professional <strong className="purple">Skillset </strong>
        </>
      ),
      toolsHeading: (
        <>
          <strong className="purple">Tools</strong> I use
        </>
      ),
    },
    it: {
      introHeading: (
        <>
          Chi <strong className="purple">SONO</strong>
        </>
      ),
      skillHeading: (
        <>
          Competenze <strong className="purple">professionali </strong>
        </>
      ),
      toolsHeading: (
        <>
          <strong className="purple">Strumenti</strong> che utilizzo
        </>
      ),
    },
  };

  const { introHeading, skillHeading, toolsHeading } = content[language] || content.en;

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {introHeading}
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">{skillHeading}</h1>

        <Techstack />

        <h1 className="project-heading">{toolsHeading}</h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
