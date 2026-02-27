import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import georiskImg from "../../Assets/Projects/3D/Georisk.png";
import zenVrImg from "../../Assets/Projects/3D/ZenVR.png";
import zenSenseImg from "../../Assets/Projects/3D/ZenSense.png";
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
        subtitle: "Educational VR journey about earthquakes and plate dynamics.",
        description:
          "GeoRisk is an educational VR experience designed as a complete immersive journey: guided introduction, video and audio content, 360 rendered scenes, and interactive levels focused on earthquakes, plate movement, and seismic risk. The goal is to turn complex geologic concepts into a clear, engaging, and practical experience.",
        roleTitle: "Focus",
        roleItems: [
          "Multilingual system: Italian, English, German, and Friulian",
          "Controller-based interactions with haptic component",
          "Content pipeline combining video, audio, and 360 renders",
          "Meta SDK and Meta Haptic Studio integration",
          "Gameplay and interaction logic in Blueprints",
          "Tools used: Unreal Engine 5.6 and Blender",
        ],
        heroImage: georiskImg,
        gallery: [georiskImg],
        videoUrl: "",
      },
      "zen-vr": {
        title: "Zen VR",
        subtitle: "Creative VR experience with selectable environments and 360 content.",
        description:
          "Zen VR provides an immersive hub where users select one of three available screens and access 360 content through simple, direct navigation. The project was distributed in alpha release and will also be presented at the Far East Film Festival together with Zen Sense.",
        roleTitle: "Focus",
        roleItems: [
          "Built in Unreal Engine 5.6",
          "Asset and scene pipeline in Blender",
          "Meta XR integration: Meta XR Plugin + Meta XR Interaction SDK with Meta Hand Interaction (hand tracking)",
          "Interaction logic implemented in Blueprints",
        ],
        heroImage: zenVrImg,
        gallery: [zenVrImg],
        videoUrl: "",
      },
      "zen-sense": {
        title: "Zen Sense",
        subtitle: "Creative multisensory VR experience combining visuals, sound, and smell.",
        description:
          "Zen Sense is an immersive experience designed as a guided path, where interaction, audiovisual content, and the olfactory component work together within the same narrative flow. The project will be presented at the Far East Film Festival together with Zen VR.",
        roleTitle: "Focus",
        roleItems: [
          "Built in Unreal Engine 5.6",
          "Asset and scene pipeline in Blender",
          "API integration for scent device control",
          "Meta XR integration: Meta XR Plugin + Meta XR Interaction SDK with Meta Hand Interaction (hand tracking)",
          "Interaction logic implemented in Blueprints",
        ],
        heroImage: zenSenseImg,
        gallery: [zenSenseImg],
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
        subtitle: "Percorso VR educativo su terremoti e dinamica delle placche.",
        description:
          "GeoRisk e' un'esperienza VR educativa costruita come percorso immersivo completo: introduzione guidata, contenuti video e audio, scene con render 360 e livelli interattivi dedicati alla comprensione di terremoti, movimento delle placche e rischio sismico. L'obiettivo e' trasformare concetti geologici complessi in un'esperienza chiara, coinvolgente e concreta.",
        roleTitle: "Focus",
        roleItems: [
          "Sistema multilingua: italiano, inglese, tedesco e friulano",
          "Interazioni via controller con componente aptica",
          "Pipeline contenuti: video, audio e render 360 integrati nel flusso esperienza",
          "Integrazione Meta SDK e Meta Haptic Studio",
          "Sviluppo logiche e interazioni in Blueprint",
          "Strumenti usati: Unreal Engine 5.6 e Blender",
        ],
        heroImage: georiskImg,
        gallery: [georiskImg],
        videoUrl: "",
      },
      "zen-vr": {
        title: "Zen VR",
        subtitle: "Esperienza VR creativa con ambienti selezionabili e contenuti 360.",
        description:
          "Zen VR offre un hub immersivo in cui l'utente seleziona uno dei tre schermi disponibili e accede a contenuti 360 con una navigazione semplice e immediata. Il progetto e' stato distribuito in release alpha e sara' presentato anche al Far East Film Festival insieme a Zen Sense.",
        roleTitle: "Focus",
        roleItems: [
          "Sviluppato in Unreal Engine 5.6",
          "Pipeline asset e scene in Blender",
          "Integrazione Meta XR: Meta XR Plugin + Meta XR Interaction SDK con Meta Hand Interaction (hand tracking)",
          "Logiche di interazione implementate in Blueprint",
        ],
        heroImage: zenVrImg,
        gallery: [zenVrImg],
        videoUrl: "",
      },
      "zen-sense": {
        title: "Zen Sense",
        subtitle: "Esperienza VR creativa e multisensoriale che unisce immagine, suono e olfatto.",
        description:
          "Zen Sense e' un'esperienza immersiva costruita come percorso guidato, dove interazione, contenuti audiovisivi e componente olfattiva lavorano insieme nella stessa narrazione. Il progetto sara' presentato al Far East Film Festival insieme a Zen VR.",
        roleTitle: "Focus",
        roleItems: [
          "Sviluppato in Unreal Engine 5.6",
          "Pipeline asset e scene in Blender",
          "Integrazione API per controllo dispositivo olfattivo",
          "Integrazione Meta XR: Meta XR Plugin + Meta XR Interaction SDK con Meta Hand Interaction (hand tracking)",
          "Logiche di interazione implementate in Blueprint",
        ],
        heroImage: zenSenseImg,
        gallery: [zenSenseImg],
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
