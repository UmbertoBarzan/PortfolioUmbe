import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import aiProject from "../../Assets/Projects/ai_project.png";
import schoolPortfolio from "../../Assets/Projects/school_portfolio.png";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

function Projects() {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: (
        <>
          Some <strong className="purple">Projects </strong> I worked on
        </>
      ),
      description:
        "A selection of projects that highlight my learning path in AI and technical studies.",
      projects: [
        {
          imgPath: aiProject,
          title: "Computer Vision Projects",
          description:
            "Vision-driven experiments that explore dataset curation, anomaly detection, and training workflows for YOLO and Anomalib models.",
          internalLink: "/computer-vision",
          internalLabel: "Explore",
          imgClassName: "project-card-img--compact",
        },
        {
          imgPath: schoolPortfolio,
          title: "School Projects Portfolio",
          description:
            "Collection of projects carried out during my ITS and university studies, including AI experiments, automation tasks, and technical exercises.",
          internalLink: "/school-projects",
          internalLabel: "Explore",
        },
      ],
    },
    it: {
      heading: (
        <>
          Alcuni <strong className="purple">Progetti </strong> a cui ho lavorato
        </>
      ),
      description:
        "Una selezione di progetti che raccontano il mio percorso nell'AI e nella formazione tecnica.",
      projects: [
        {
          imgPath: aiProject,
          title: "Progetti di Computer Vision",
          description:
            "Esperimenti basati sulla visione artificiale: gestione dei dataset, anomaly detection e workflow di training per YOLO e Anomalib.",
          internalLink: "/computer-vision",
          internalLabel: "Scopri",
          imgClassName: "project-card-img--compact",
        },
        {
          imgPath: schoolPortfolio,
          title: "Progetti scolastici",
          description:
            "Raccolta dei progetti svolti durante gli studi ITS e universitari: esperimenti di AI, automazione e applicazioni tecniche.",
          internalLink: "/school-projects",
          internalLabel: "Scopri",
        },
      ],
    },
  };

  const activeContent = content[language] || content.en;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">{activeContent.heading}</h1>
        <p className="project-description">{activeContent.description}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {activeContent.projects.map((project) => (
            <Col md={5} lg={4} className="project-card" key={project.title}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                internalLink={project.internalLink}
                internalLabel={project.internalLabel}
                imgClassName={project.imgClassName}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
