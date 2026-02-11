import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import georiskImg from "../../Assets/Projects/3D/Georisk.png";
import zenVrImg from "../../Assets/Projects/3D/ZenVR.png";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

const contentByLanguage = {
  en: {
    heading: (
      <>
        3D &amp; VR <strong className="purple">Projects</strong>
      </>
    ),
    intro:
      "Immersive experiences built for education, training, and company showcases.",
    projects: [
      {
        title: "GeoRisk Earthquake Experience",
        description:
          "VR simulation commissioned by the Istituto Sismico di Gemona to communicate earthquake risk through an immersive narrative.",
        highlights: [
          "Immersive reconstruction of a seismic event with guided storytelling",
          "Focus on awareness and learning through experience",
          "Developed with two other interns for a real-world client",
        ],
        image: georiskImg,
        detailLink: "/3d-projects/georisk",
      },
      {
        title: "Zen VR",
        description:
          "VR hub that lets users pick one of three screens, each playing a different 360 video created by a colleague for a company showcase.",
        highlights: [
          "Simple navigation between three curated 360 video experiences",
          "Optimized for quick demos and repeatable showcases",
          "Designed as a lightweight entry point to VR content",
        ],
        image: zenVrImg,
        detailLink: "/3d-projects/zen-vr",
      },
    ],
    detailLabel: "View project",
  },
  it: {
    heading: (
      <>
        Progetti <strong className="purple">3D e VR</strong>
      </>
    ),
    intro:
      "Esperienze immersive pensate per formazione, divulgazione e demo aziendali.",
    projects: [
      {
        title: "Esperienza terremoto GeoRisk",
        description:
          "Simulazione VR realizzata per l'Istituto Sismico di Gemona, pensata per comunicare il rischio sismico con una narrazione immersiva.",
        highlights: [
          "Ricostruzione immersiva dell'evento con storytelling guidato",
          "Focus su consapevolezza e apprendimento esperienziale",
          "Sviluppato con altri due stagisti per un cliente reale",
        ],
        image: georiskImg,
        detailLink: "/3d-projects/georisk",
      },
      {
        title: "Zen VR",
        description:
          "Hub VR che permette di scegliere tra tre schermi, ognuno con un video 360 diverso creato da un collega per una demo aziendale.",
        highlights: [
          "Navigazione semplice tra tre esperienze video 360 curate",
          "Ottimizzato per demo rapide e ripetibili",
          "Pensato come punto di accesso leggero ai contenuti VR",
        ],
        image: zenVrImg,
        detailLink: "/3d-projects/zen-vr",
      },
    ],
    detailLabel: "Guarda progetto",
  },
};

function ThreeDProjects() {
  const { language } = useLanguage();
  const { heading, intro, projects, detailLabel } =
    contentByLanguage[language] || contentByLanguage.en;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">{heading}</h1>
        <p className="project-description">{intro}</p>

        {projects.map((project) => (
          <section className="cv-project" key={project.title}>
            <Row className="align-items-center">
              <Col md={5} className="cv-project-media">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="cv-project-image"
                  fluid
                />
              </Col>
              <Col md={7}>
                <h2 className="cv-project-title">{project.title}</h2>
                <p className="cv-project-text">{project.description}</p>
                <ul className="cv-project-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="purple">•</span> {highlight}
                    </li>
                  ))}
                </ul>
                <Button
                  as={Link}
                  to={project.detailLink}
                  variant="primary"
                >
                  {detailLabel}
                </Button>
              </Col>
            </Row>
          </section>
        ))}
      </Container>
    </Container>
  );
}

export default ThreeDProjects;
