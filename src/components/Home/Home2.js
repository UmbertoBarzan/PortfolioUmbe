import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: (
        <>
          ABOUT <span className="purple"> ME</span>
        </>
      ),
      body: (
        <>
          I started working on programming and technology about a year ago,
          and since then I’ve been steadily learning and experimenting.
          <br />
          <br />
          My main focus so far has been on <b className="purple">computer
          vision and AI</b>, with a growing curiosity for <b className="purple">
          3D design</b>. I prefer a practical approach: building small
          projects, testing ideas, and improving step by step.
          <br />
          <br />
          I mainly use <b className="purple">Python</b>. I’m still at the
          beginning of my journey, and I’m working hard to develop solid
          skills I can apply in real situations.
        </>
      ),
      findMe: "FIND ME ON",
      connect: "Feel free to connect with me",
    },
    it: {
      heading: (
        <>
          SU DI <span className="purple"> ME</span>
        </>
      ),
      body: (
        <>
          Mi sono avvicinato alla programmazione e al mondo tech circa un anno
          fa e, da allora, porto avanti un percorso di apprendimento continuo.
          <br />
          <br />
          Il mio focus principale è la <b className="purple">computer vision e l'AI</b>,
          con un interesse crescente per il <b className="purple">design 3D</b>.
          Preferisco un approccio pratico: costruire piccoli progetti,
          sperimentare idee e migliorarmi gradualmente.
          <br />
          <br />
          Lavoro soprattutto con <b className="purple">Python</b> e sto
          costruendo competenze solide da applicare in contesti reali.
        </>
      ),
      findMe: "DOVE TROVARMI",
      connect: "Sentiamoci su questi canali",
    },
  };

  const { heading, body, findMe, connect } = content[language] || content.en;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              {heading}
            </h1>
            <p className="home-about-body">
              {body}
            </p>
            {/* #TODO: se vuoi aggiungere 3 bullet concreti (mini-progetti), inseriscili qui */}
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            {/* #TODO: sostituisci avatar.svg con una tua immagine */}
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>{findMe}</h1>
            <p>{connect}</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/UmbertoBarzan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/umberto-barzan-8911a9332/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:barzanumberto@hotmail.it"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
