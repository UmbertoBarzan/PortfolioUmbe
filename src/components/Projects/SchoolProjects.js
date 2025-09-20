import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Modal, Carousel } from "react-bootstrap";
import trafficSimulatorImg from "../../Assets/SchoolProjects/traffic-sim/traffic-simulator.png";
import industrialSawImg from "../../Assets/SchoolProjects/industrial-saw/industrial-saw.png";
import marsFarmCover from "../../Assets/SchoolProjects/mars-farm/1.png";
import marsEn2 from "../../Assets/SchoolProjects/mars-farm/EN/2.png";
import marsEn3 from "../../Assets/SchoolProjects/mars-farm/EN/3.png";
import marsEn4 from "../../Assets/SchoolProjects/mars-farm/EN/4.png";
import marsEn5 from "../../Assets/SchoolProjects/mars-farm/EN/5.png";
import marsEn6 from "../../Assets/SchoolProjects/mars-farm/EN/6.png";
import marsEn7 from "../../Assets/SchoolProjects/mars-farm/EN/7.png";
import marsIt2 from "../../Assets/SchoolProjects/mars-farm/IT/2.png";
import marsIt3 from "../../Assets/SchoolProjects/mars-farm/IT/3.png";
import marsIt4 from "../../Assets/SchoolProjects/mars-farm/IT/4.png";
import marsIt5 from "../../Assets/SchoolProjects/mars-farm/IT/5.png";
import marsIt6 from "../../Assets/SchoolProjects/mars-farm/IT/6.png";
import marsIt7 from "../../Assets/SchoolProjects/mars-farm/IT/7.png";
import { BsGithub, BsImages } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

const contentByLanguage = {
  en: {
    heading: (
      <>
        School <strong className="purple">Projects</strong>
      </>
    ),
    intro:
      "Highlights from hands-on assignments completed during my technical studies, focusing on simulation, industrial monitoring, and immersive 3D design.",
    traffic: {
      title: "Intelligent Traffic Simulator",
      description:
        "A modular intersection simulator used to explore advanced control logic, collision handling, and team coordination on a realistic traffic scenario.",
      bullets: [
        {
          highlight: "Modular architecture",
          text: "subsystem split for traffic lights, vehicles, trajectories, and field-of-view checks.",
        },
        {
          highlight: "Dynamic algorithms",
          text: "acceleration, right-of-way, and collision management tuned for changing traffic conditions.",
        },
        {
          highlight: "Object-oriented design",
          text: "reusable classes with inheritance and custom behaviours for each entity.",
        },
        {
          highlight: "Agile collaboration",
          text: "coordinated teamwork across on-site and remote sessions with iterative reviews.",
        },
      ],
      button: "View GitHub Repository",
      github: "https://github.com/UmbertoBarzan/Traffic-Simulator",
    },
    saw: {
      title: "Industrial Saw Monitoring",
      description:
        "Monitoring platform for an industrial cutting machine, integrating data pipelines, dashboards, and collaborative workflows with other teams.",
      bullets: [
        {
          highlight: "Cross-team data flow",
          text: "shared interfaces and protocols to keep streamed telemetry consistent.",
        },
        {
          highlight: "Relational modelling",
          text: "structured tables, relationships, and queries supporting actionable insights.",
        },
        {
          highlight: "Structured data handling",
          text: "JSON and SQL processing to transform raw events into usable metrics.",
        },
        {
          highlight: "Real-time UI",
          text: "lightweight monitoring dashboard tailored for operators.",
        },
        {
          highlight: "Dockerized environments",
          text: "reproducible setups for testing and deployment.",
        },
      ],
      button: "View GitHub Repository",
      github: "https://github.com/UmbertoBarzan/IndustrialSaw",
    },
    mars: {
      title: "Mars Farm VR Experience",
      description:
        "A VR-ready 3D environment crafted in Blender, combining science-fiction references with moodboard research to imagine a self-sufficient farm on Mars.",
      bullets: [
        {
          highlight: "Narrative concept",
          text: 'inspired by the "Suits" episode of Love, Death & Robots, merging nature and technology inside a Martian dome.',
        },
        {
          highlight: "Reference scouting",
          text: "real greenhouses, sci-fi farms, and generative imagery shaping the atmosphere.",
        },
        {
          highlight: "Moodboard balance",
          text: "warm interior lighting against the cold exterior to deliver a calm refuge.",
        },
        {
          highlight: "Iterative modelling",
          text: "incremental Blender workflow enhanced by BlenderKit assets and AmbientCG HDRI skies.",
        },
        {
          highlight: "Immersive result",
          text: "final 8K render presenting the full scene, ready for exploration in VR.",
        },
      ],
      slidesButton: "View Slides",
      slidesTitle: "Mars Farm Slides",
    },
  },
  it: {
    heading: (
      <>
        Progetti <strong className="purple">Scolastici</strong>
      </>
    ),
    intro:
      "Panoramica dei lavori pratici realizzati durante il percorso tecnico: simulazione, monitoraggio industriale e design 3D immersivo.",
    traffic: {
      title: "Simulatore di Traffico Intelligente",
      description:
        "Un simulatore di incrocio modulare per sperimentare logiche di controllo avanzate, gestione delle collisioni e coordinamento del team in uno scenario realistico.",
      bullets: [
        {
          highlight: "Architettura modulare",
          text: "suddivisione in sottosistemi dedicati a semafori, veicoli, traiettorie e controlli del campo visivo.",
        },
        {
          highlight: "Algoritmi dinamici",
          text: "gestione di accelerazioni, precedenze e collisioni adattandosi alle condizioni del traffico.",
        },
        {
          highlight: "Design orientato agli oggetti",
          text: "classi riutilizzabili con ereditarietà e comportamenti personalizzati per ogni entità.",
        },
        {
          highlight: "Collaborazione agile",
          text: "lavoro di squadra coordinato tra sessioni in presenza e da remoto con revisioni iterative.",
        },
      ],
      button: "Apri il repository su GitHub",
      github: "https://github.com/UmbertoBarzan/Traffic-Simulator",
    },
    saw: {
      title: "Monitoraggio Segatrice Industriale",
      description:
        "Piattaforma di monitoraggio per una segatrice industriale, con pipeline dati integrate, dashboard dedicate e lavoro con team collegati.",
      bullets: [
        {
          highlight: "Flusso dati condiviso",
          text: "interfacce e protocolli comuni per mantenere coerenti i dati in streaming.",
        },
        {
          highlight: "Modellazione relazionale",
          text: "tabelle strutturate, relazioni e query a supporto di insight operativi.",
        },
        {
          highlight: "Gestione dati strutturati",
          text: "elaborazione di JSON e SQL per trasformare gli eventi grezzi in metriche utili.",
        },
        {
          highlight: "UI in tempo reale",
          text: "dashboard leggera e mirata per gli operatori.",
        },
        {
          highlight: "Ambienti Docker",
          text: "setup riproducibili per test e deployment.",
        },
      ],
      button: "Apri il repository su GitHub",
      github: "https://github.com/UmbertoBarzan/IndustrialSaw",
    },
    mars: {
      title: "Mars Farm VR Experience",
      description:
        "Ambiente 3D compatibile con la VR realizzato in Blender, che unisce riferimenti sci-fi e ricerca visiva per immaginare una fattoria autosufficiente su Marte.",
      bullets: [
        {
          highlight: "Concept narrativo",
          text: 'ispirazione dall\'episodio "Suits" di Love, Death & Robots, unendo natura e tecnologia dentro una cupola marziana.',
        },
        {
          highlight: "Ricerca di reference",
          text: "serre reali, fattorie futuristiche e immagini generate per definire l'atmosfera.",
        },
        {
          highlight: "Equilibrio di moodboard",
          text: "luci calde all'interno in contrasto con l'esterno freddo per creare un rifugio accogliente.",
        },
        {
          highlight: "Modellazione iterativa",
          text: "workflow in Blender arricchito da asset BlenderKit e cieli HDRI di AmbientCG.",
        },
        {
          highlight: "Risultato immersivo",
          text: "render finale in 8K che mostra l'intera scena, pronto per essere esplorato in VR.",
        },
      ],
      slidesButton: "Guarda le diapositive",
      slidesTitle: "Diapositive Mars Farm",
    },
  },
};

function SchoolProjects() {
  const { language } = useLanguage();
  const { heading, intro, traffic, saw, mars } =
    contentByLanguage[language] || contentByLanguage.en;
  const [showSlides, setShowSlides] = useState(false);
  const [slidesLanguage, setSlidesLanguage] = useState(language);

  const slidesByLanguage = {
    en: [marsFarmCover, marsEn2, marsEn3, marsEn4, marsEn5, marsEn6, marsEn7],
    it: [marsFarmCover, marsIt2, marsIt3, marsIt4, marsIt5, marsIt6, marsIt7],
  };

  const openSlides = (lang) => {
    setSlidesLanguage(lang);
    setShowSlides(true);
  };

  const closeSlides = () => setShowSlides(false);
  const activeSlides = slidesByLanguage[slidesLanguage] || slidesByLanguage.en;

  useEffect(() => {
    if (!showSlides) {
      setSlidesLanguage(language);
    }
  }, [language, showSlides]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">{heading}</h1>
        <p className="school-project-intro">{intro}</p>

        <section className="school-project">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0 school-project-media">
              <Image
                src={trafficSimulatorImg}
                alt="Intelligent traffic simulator"
                className="school-project-image"
                fluid
              />
            </Col>
            <Col md={6}>
              <h2 className="school-project-title">{traffic.title}</h2>
              <p>{traffic.description}</p>
              <ul>
                {traffic.bullets.map(({ highlight, text }) => (
                  <li key={highlight}>
                    <span className="purple">{highlight}:</span> {text}
                  </li>
                ))}
              </ul>
              {traffic.github && (
                <Button
                  variant="primary"
                  href={traffic.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  <BsGithub /> &nbsp;{traffic.button}
                </Button>
              )}
            </Col>
          </Row>
        </section>

        <section className="school-project">
          <Row className="align-items-center flex-column-reverse flex-md-row">
            <Col md={6}>
              <h2 className="school-project-title">{saw.title}</h2>
              <p>{saw.description}</p>
              <ul>
                {saw.bullets.map(({ highlight, text }) => (
                  <li key={highlight}>
                    <span className="purple">{highlight}:</span> {text}
                  </li>
                ))}
              </ul>
              {saw.github && (
                <Button
                  variant="primary"
                  href={saw.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  <BsGithub /> &nbsp;{saw.button}
                </Button>
              )}
            </Col>
            <Col md={6} className="mb-4 mb-md-0 school-project-media">
              <Image
                src={industrialSawImg}
                alt="Industrial saw monitoring system"
                className="school-project-image"
                fluid
              />
            </Col>
          </Row>
        </section>

        <section className="school-project">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0 school-project-media">
              <Image
                src={marsFarmCover}
                alt="Mars Farm VR project cover"
                className="school-project-image"
                fluid
              />
            </Col>
            <Col md={6}>
              <h2 className="school-project-title">{mars.title}</h2>
              <p>{mars.description}</p>
              <ul>
                {mars.bullets.map(({ highlight, text }) => (
                  <li key={highlight}>
                    <span className="purple">{highlight}:</span> {text}
                  </li>
                ))}
              </ul>
              <Button
                variant="primary"
                className="mt-3"
                onClick={() => openSlides(language)}
              >
                <BsImages /> &nbsp;{mars.slidesButton}
              </Button>
            </Col>
          </Row>
        </section>

        <Modal
          show={showSlides}
          onHide={closeSlides}
          size="xl"
          centered
          className="mars-slides-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{mars.slidesTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel interval={null} variant="dark">
              {activeSlides.map((slide, index) => (
                <Carousel.Item key={`${slidesLanguage}-slide-${index}`}>
                  <img
                    className="d-block w-100 mars-slide-image"
                    src={slide}
                    alt={`Mars Farm slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default SchoolProjects;
