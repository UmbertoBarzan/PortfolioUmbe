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
          <br />I am focusing on{" "}
          <b className="purple">AI, Computer Vision, and IoT</b>, learning
          step by step through real projects and practical experience.
          <br />
          My background in mechanics and my curiosity for technology led me
          into <b className="purple">industrial automation</b> and
          <b className="purple"> 3D/creative tools</b> such as Blender and
          Lightroom.
          <br />
          <br />
          Apart from coding and AI, I also enjoy working on 3D projects,
          experimenting with digital art, and exploring new technologies.
        </>
      ),
      activities: [
        "Computer Vision & AI inspection projects",
        "IoT & industrial automation experiments",
        "3D graphics and digital creativity",
      ],
      quote: "Always learning, building, and growing step by step.",
    },
    it: {
      intro: (
        <>
          Ciao a tutti, sono <span className="purple">Umberto Barzan</span>{" "}
          e vivo in <span className="purple">Italia</span>.
          <br />Mi sto concentrando su
          <b className="purple"> AI, Computer Vision e IoT</b>, imparando
          attraverso progetti concreti ed esperienza sul campo.
          <br />
          Il mio background meccanico e la curiosità per la tecnologia mi hanno
          portato verso l'<b className="purple">automazione industriale</b> e
          gli strumenti <b className="purple">3D/creativi</b> come Blender e
          Lightroom.
          <br />
          <br />
          Oltre al coding e all'AI, mi piace lavorare su progetti 3D,
          sperimentare con la digital art ed esplorare nuove tecnologie.
        </>
      ),
      activities: [
        "Progetti di computer vision e AI",
        "Esperimenti di IoT e automazione industriale",
        "Grafica 3D e creatività digitale",
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
