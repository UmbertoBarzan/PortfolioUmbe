import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiWindows,
  SiVisualstudiocode,
  SiPostman,
  SiNodered,
  SiGrafana,
  SiSlack,
  SiBlender,
  SiVirtualbox,
  SiAdobelightroom,
  SiMicrosoftoffice,
} from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";

function Toolstack() {
  const { language } = useLanguage();

  const toolItems = [
    {
      key: "linux",
      Icon: SiLinux,
      label: { en: "Linux", it: "Linux" },
    },
    {
      key: "windows",
      Icon: SiWindows,
      label: { en: "Windows", it: "Windows" },
    },
    {
      key: "vscode",
      Icon: SiVisualstudiocode,
      label: { en: "Visual Studio Code", it: "Visual Studio Code" },
    },
    {
      key: "postman",
      Icon: SiPostman,
      label: { en: "Postman", it: "Postman" },
    },
    {
      key: "nodered",
      Icon: SiNodered,
      label: { en: "Node-RED", it: "Node-RED" },
    },
    {
      key: "grafana",
      Icon: SiGrafana,
      label: { en: "Grafana", it: "Grafana" },
    },
    {
      key: "slack",
      Icon: SiSlack,
      label: { en: "Slack", it: "Slack" },
    },
    {
      key: "blender",
      Icon: SiBlender,
      label: { en: "Blender", it: "Blender" },
    },
    {
      key: "virtualbox",
      Icon: SiVirtualbox,
      label: { en: "VirtualBox", it: "VirtualBox" },
    },
    {
      key: "lightroom",
      Icon: SiAdobelightroom,
      label: { en: "Adobe Lightroom", it: "Adobe Lightroom" },
    },
    {
      key: "msoffice",
      Icon: SiMicrosoftoffice,
      label: { en: "Microsoft Office", it: "Microsoft Office" },
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolItems.map(({ key, Icon, label }) => {
        const text = label[language] || label.en;
        return (
          <Col xs={4} md={2} className="tech-icons" key={key}>
            <div className="tech-icon-inner">
              <Icon />
              <span className="tech-icon-label">{text}</span>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
