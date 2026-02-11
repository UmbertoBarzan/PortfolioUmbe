import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import georiskImg from "../../Assets/Projects/3D/Georisk.png";
import zenVrImg from "../../Assets/Projects/3D/ZenVR.png";
import Particle from "../Particle";

const contentByLanguage = {
  en: {
    backLabel: "Back to 3D projects",
    sections: {
      overview: "Overview",
      gallery: "Gallery",
      video: "Video",
    },
    emptyGallery: "Images will be added soon.",
    emptyVideo: "Video will be added soon.",
    projects: {
      georisk: {
        title: "GeoRisk Earthquake Experience",
        subtitle: "VR simulation for seismic awareness and education.",
        description:
          "Immersive experience commissioned by the Istituto Sismico di Gemona. The project focuses on communicating earthquake risk through interactive storytelling and a guided VR journey.",
        roleTitle: "Focus",
        roleItems: [
          "VR environment and narrative flow",
          "Interactive storytelling for education",
          "Team collaboration with two other interns",
        ],
        heroImage: georiskImg,
        gallery: [georiskImg],
        videoUrl: "",
      },
      "zen-vr": {
        title: "Zen VR",
        subtitle: "VR hub with three 360 video experiences.",
        description:
          "Lightweight VR hub that lets users choose one of three screens, each playing a different 360 video. Built for fast demos and repeatable showcases.",
        roleTitle: "Focus",
        roleItems: [
          "Simple navigation and UI flow",
          "Media integration for 360 content",
          "Optimized for quick showcase sessions",
        ],
        heroImage: zenVrImg,
        gallery: [zenVrImg],
        videoUrl: "",
      },
    },
  },
  it: {
    backLabel: "Torna ai progetti 3D",
    sections: {
      overview: "Panoramica",
      gallery: "Galleria",
      video: "Video",
    },
    emptyGallery: "Le immagini verranno aggiunte a breve.",
    emptyVideo: "Il video verrà aggiunto a breve.",
    projects: {
      georisk: {
        title: "Esperienza terremoto GeoRisk",
        subtitle: "Simulazione VR per la divulgazione del rischio sismico.",
        description:
          "Esperienza immersiva commissionata dall'Istituto Sismico di Gemona. Il progetto punta a comunicare il rischio sismico attraverso storytelling e un percorso VR guidato.",
        roleTitle: "Focus",
        roleItems: [
          "Ambiente VR e flusso narrativo",
          "Storytelling interattivo per la divulgazione",
          "Collaborazione con altri due stagisti",
        ],
        heroImage: georiskImg,
        gallery: [georiskImg],
        videoUrl: "",
      },
      "zen-vr": {
        title: "Zen VR",
        subtitle: "Hub VR con tre esperienze video 360.",
        description:
          "Hub VR leggero che permette di scegliere uno dei tre schermi, ognuno con un video 360 differente. Pensato per demo rapide e ripetibili.",
        roleTitle: "Focus",
        roleItems: [
          "Navigazione semplice e flusso UI",
          "Integrazione media per contenuti 360",
          "Ottimizzato per sessioni demo rapide",
        ],
        heroImage: zenVrImg,
        gallery: [zenVrImg],
        videoUrl: "",
      },
    },
  },
};

function ThreeDProjectDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const content = contentByLanguage[language] || contentByLanguage.en;
  const project = content.projects[slug];

  if (!project) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">Project not found</h1>
          <Button as={Link} to="/3d-projects" variant="primary">
            {content.backLabel}
          </Button>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-detail">
        <Button as={Link} to="/3d-projects" variant="primary">
          {content.backLabel}
        </Button>

        <section className="project-detail-hero">
          <Row className="align-items-center">
            <Col md={6} className="project-detail-hero-media">
              <Image
                src={project.heroImage}
                alt={project.title}
                className="project-detail-hero-image"
                fluid
              />
            </Col>
            <Col md={6}>
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-subtitle">{project.subtitle}</p>
              <p className="project-detail-text">{project.description}</p>
              <h2 className="project-detail-section-title">
                {project.roleTitle}
              </h2>
              <ul className="project-detail-list">
                {project.roleItems.map((item) => (
                  <li key={item}>
                    <span className="purple">•</span> {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </section>

        <section className="project-detail-section">
          <h2 className="project-detail-section-title">
            {content.sections.gallery}
          </h2>
          {project.gallery.length === 0 ? (
            <p className="project-detail-empty">{content.emptyGallery}</p>
          ) : (
            <Row className="project-detail-gallery">
              {project.gallery.map((image, index) => (
                <Col md={4} sm={6} key={`${project.title}-gallery-${index}`}>
                  <Image
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="project-detail-gallery-image"
                    fluid
                  />
                </Col>
              ))}
            </Row>
          )}
        </section>

        <section className="project-detail-section">
          <h2 className="project-detail-section-title">
            {content.sections.video}
          </h2>
          {project.videoUrl ? (
            <div className="project-detail-video">
              <iframe
                title={`${project.title} video`}
                src={project.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <p className="project-detail-empty">{content.emptyVideo}</p>
          )}
        </section>
      </Container>
    </Container>
  );
}

export default ThreeDProjectDetail;
