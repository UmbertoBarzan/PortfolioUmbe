import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Barzan_Umberto_CV.pdf";
import pdfEn from "../../Assets/Barzan_Umberto_CV_EN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { language } = useLanguage();

  const content = {
    en: {
      downloadLabel: "Download PDF",
      sections: [
        { id: "it", title: "Italian CV", file: pdf },
        { id: "en", title: "English CV", file: pdfEn },
      ],
    },
    it: {
      downloadLabel: "Scarica il PDF",
      sections: [
        { id: "it", title: "Curriculum in Italiano", file: pdf },
        { id: "en", title: "Curriculum in Inglese", file: pdfEn },
      ],
    },
  };

  const { downloadLabel, sections } = content[language] || content.en;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageScale = (() => {
    if (width > 1400) return 1.4;
    if (width > 1200) return 1.25;
    if (width > 991) return 1.1;
    if (width > 768) return 0.85;
    return 0.6;
  })();

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row className="g-4 justify-content-center resume-previews">
            {sections.map((section) => (
              <Col
                key={section.id}
                md={6}
                className="d-flex flex-column align-items-center resume-preview-col"
              >
                <h2 className="resume-language-heading">{section.title}</h2>
                <div className="resume-document">
                  <Document file={section.file} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={pageScale} />
                  </Document>
                </div>
                <Button
                  variant="primary"
                  href={section.file}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3"
                >
                  <AiOutlineDownload />&nbsp;{downloadLabel}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
