import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      designed: "Designed and Developed by Umberto Barzan",
    },
    it: {
      designed: "Progettato e sviluppato da Umberto Barzan",
    },
  };

  const { designed } = content[language] || content.en;

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{designed}</h3>
        </Col>
        <Col md="8" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/UmbertoBarzan"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/umberto-barzan-8911a9332/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
