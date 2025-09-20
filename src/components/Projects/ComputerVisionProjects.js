import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import yoloTrainerImg from "../../Assets/robot.png";
import visionCheckImg from "../../Assets/visioncheck.png";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

const contentByLanguage = {
  en: {
    heading: (
      <>
        Computer Vision <strong className="purple">Projects</strong>
      </>
    ),
    intro:
      "A growing collection of experiments and tools built around vision-based automation, anomaly detection, and dataset curation.",
    projects: [
      {
        title: "YOLO-Anomalib-Trainer-Hub",
        description:
          "Service that receives datasets via REST, organises them, and triggers the requested YOLO or Anomalib training pipelines. Built to simplify dataset ingestion and model retraining without touching notebooks.",
        highlights: [
          "POST endpoint that accepts dataset archives and training parameters",
          "Automatic folder setup for YOLO and Anomalib pipelines",
          "Launches training jobs and reports progress through lightweight APIs",
        ],
        github: "https://github.com/UmbertoBarzan/YOLO-Anomalib-Trainer-Hub",
        image: yoloTrainerImg,
      },
      {
        title: "VisionCheck",
        description:
          "Playground that blends YOLOv8 detection, SAM segmentation, and Anomalib anomaly scores on live webcam frames. A Flask backend exposes capture/inference APIs and a static UI lets you pick models and review annotated results in seconds.",
        highlights: [
          "Combines YOLOv8, SAM, and Anomalib models for multi-step analysis",
          "Flask API to grab frames, run inference, and return overlays",
          "Static frontend to switch models and inspect the annotated stream",
        ],
        github: "https://github.com/UmbertoBarzan/VisionCheck",
        image: visionCheckImg,
      },
    ],
  },
  it: {
    heading: (
      <>
        Progetti di <strong className="purple">Computer Vision</strong>
      </>
    ),
    intro:
      "Una raccolta in crescita di esperimenti dedicati alla visione artificiale: automazione, anomaly detection e gestione dei dataset.",
    projects: [
      {
        title: "YOLO-Anomalib-Trainer-Hub",
        description:
          "Servizio che riceve dataset via richieste REST, li organizza e avvia le pipeline di training richieste (YOLO o Anomalib). Pensato per semplificare l'ingestione dei dati e il retraining senza dover intervenire manualmente.",
        highlights: [
          "Endpoint POST che accetta archivi e parametri di training",
          "Setup automatico delle cartelle per pipeline YOLO e Anomalib",
          "Avvia i job di training e restituisce lo stato tramite API leggere",
        ],
        github: "https://github.com/UmbertoBarzan/YOLO-Anomalib-Trainer-Hub",
        image: yoloTrainerImg,
      },
      {
        title: "VisionCheck",
        description:
          "Playground che combina YOLOv8, SAM e Anomalib sui frame della webcam. Il backend Flask espone API per catturare, lanciare l'inferenza e restituire immagini annotate, mentre il frontend statico permette di scegliere il modello e visualizzare i risultati.",
        highlights: [
          "Pipeline che unisce YOLOv8, SAM e modelli Anomalib per l'analisi multi-step",
          "API Flask per acquisire i frame, eseguire l'inferenza e restituire gli overlay",
          "Interfaccia statica per selezionare i modelli e osservare il feed annotato",
        ],
        github: "https://github.com/UmbertoBarzan/VisionCheck",
        image: visionCheckImg,
      },
    ],
  },
};

function ComputerVisionProjects() {
  const { language } = useLanguage();
  const { heading, intro, projects } =
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
                  src={project.image || yoloTrainerImg}
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
                  variant="primary"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub /> &nbsp; GitHub
                </Button>
              </Col>
            </Row>
          </section>
        ))}
      </Container>
    </Container>
  );
}

export default ComputerVisionProjects;
