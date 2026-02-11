import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { language } = useLanguage();

  const content = {
    en: {
      intro: (
        <>
          Hi Everyone, I am <span className="purple">Umberto Barzan</span>{" "}
          from
          <span className="purple"> Italy</span>.
          <br />I am focusing on <b className="purple">3D</b>, building
          interactive environments and VR experiences with Unreal Engine and
          Blender.
          <br />
          My background in mechanics and IT, plus hands-on work in
          <b className="purple"> computer vision</b>, gives me a structured,
          problem-solving approach when designing immersive projects.
          <br />
          <br />
          I enjoy combining logic and creativity, experimenting with XR
          workflows, and pushing real-time visuals a bit further each project.
        </>
      ),
      activities: [
        "3D & VR experiences in Unreal Engine",
        "Blender modeling and real-time scene setup",
        "Computer vision/AI for interactive systems",
      ],
      quote: "Always learning, building, and growing step by step.",
    },
    it: {
      intro: (
        <>
          Ciao a tutti, sono <span className="purple">Umberto Barzan</span>{" "}
          e vivo in <span className="purple">Italia</span>.
          <br />Mi sto concentrando sullo{" "}
          <b className="purple">sviluppo 3D</b>, creando ambienti interattivi ed
          esperienze VR con Unreal Engine e Blender.
          <br />
          Il mio background meccanico e informatico, unito all'esperienza in
          <b className="purple"> computer vision</b>, mi dà un approccio
          strutturato e orientato al problem solving nei progetti immersivi.
          <br />
          <br />
          Mi piace unire logica e creatività, sperimentare con workflow XR e
          spingere un po' oltre il real-time ad ogni progetto.
        </>
      ),
      activities: [
        "Esperienze 3D e VR in Unreal Engine",
        "Modellazione Blender e setup scene",
        "Computer vision/AI per sistemi interattivi",
      ],
      quote: "Imparo, costruisco e cresco un passo alla volta.",
    },
  };

  const { intro, activities, quote } = content[language] || content.en;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {intro}
          </p>
          <ul>
            {activities.map((item) => (
              <li className="about-activity" key={item}>
                <ImPointRight /> {item}
              </li>
            ))}
          </ul>
          <p style={{ color: "#ffffff" }}>
            "{quote}"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
