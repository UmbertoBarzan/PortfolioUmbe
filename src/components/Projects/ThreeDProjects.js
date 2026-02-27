import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import georiskImg from "../../Assets/Projects/3D/Georisk.png";
import zenVrImg from "../../Assets/Projects/3D/ZenVR.png";
import zenSenseImg from "../../Assets/Projects/3D/ZenSense.png";
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
          "Educational VR experience on earthquakes and plate dynamics, with a multilingual interactive journey and haptic component.",
        highlights: [
          "Immersive learning path with guided introduction and interactive content",
          "Video, audio, and 360 rendered scenes integrated in the experience flow",
          "Built to make seismic topics accessible without oversimplifying them",
        ],
        image: georiskImg,
        detailLink: "/3d-projects/georisk",
      },
      {
        title: "Zen VR",
        description:
          "Creative VR experience with selectable environments and 360 content.",
        highlights: [
          "Fixed immersive hub with three selectable screens",
          "Each screen is linked to a different 360 content experience",
          "Simple, direct interaction model for immediate use",
        ],
        image: zenVrImg,
        detailLink: "/3d-projects/zen-vr",
      },
      {
        title: "Zen Sense",
        description:
          "Creative multisensory VR experience combining visuals, sound, and smell in an immersive path.",
        highlights: [
          "Guided immersive path with interactive moments",
          "Audiovisual narrative designed to work with scent cues",
          "Built to deliver a strong multisensory experience",
        ],
        image: zenSenseImg,
        detailLink: "/3d-projects/zen-sense",
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
          "Esperienza VR educativa su terremoti e dinamica delle placche, con percorso multilingua interattivo e componente aptica.",
        highlights: [
          "Percorso immersivo con introduzione guidata e contenuti interattivi",
          "Video, audio e render 360 integrati nel flusso esperienza",
          "Pensato per spiegare temi sismici in modo chiaro senza banalizzarli",
        ],
        image: georiskImg,
        detailLink: "/3d-projects/georisk",
      },
      {
        title: "Zen VR",
        description:
          "Esperienza VR creativa con ambienti selezionabili e contenuti 360.",
        highlights: [
          "Hub immersivo fisso con tre schermi selezionabili",
          "Ogni schermo e' collegato a un contenuto 360 differente",
          "Interazione semplice e diretta, immediata da usare",
        ],
        image: zenVrImg,
        detailLink: "/3d-projects/zen-vr",
      },
      {
        title: "Zen Sense",
        description:
          "Esperienza VR creativa e multisensoriale che unisce immagine, suono e olfatto in un percorso immersivo.",
        highlights: [
          "Percorso immersivo guidato con momenti interattivi",
          "Narrazione audiovisiva pensata per lavorare con i trigger olfattivi",
          "Progettato per offrire un'esperienza multisensoriale forte",
        ],
        image: zenSenseImg,
        detailLink: "/3d-projects/zen-sense",
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
