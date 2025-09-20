import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useLanguage } from "../../context/LanguageContext";

function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      greeting: "Hi There!",
      im: "I'M",
      subtitle: "Learning and growing in AI and Computer Vision.",
    },
    it: {
      greeting: "Ciao!",
      im: "SONO",
      subtitle:
        "Percorso di crescita nella Computer Vision e nell'intelligenza artificiale.",
    },
  };

  const { greeting, im, subtitle } = content[language] || content.en;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {greeting}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {im} <strong className="main-name"> UMBERTO BARZAN</strong>
              </h1>

              <div style={{ padding: "30px", textAlign: "left" }}>
                <Type />
                <p className="home-subtitle" style={{ marginTop: 12 }}>
                  {subtitle}
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              {/* #TODO: sostituisci l'immagine con una tua illustrazione/foto se vuoi */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
