import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiMongodb, DiPython, DiGit, DiMysql } from "react-icons/di";
import {
  SiRedis,
  SiPytorch,
  SiYolo,
  SiOpencv,
  SiDocker,
  SiCplusplus,
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";

function Techstack() {
  const { language } = useLanguage();

  const techItems = [
    {
      key: "python",
      Icon: DiPython,
      label: { en: "Python", it: "Python" },
    },
    {
      key: "pytorch",
      Icon: SiPytorch,
      label: { en: "PyTorch", it: "PyTorch" },
    },
    {
      key: "yolo",
      Icon: SiYolo,
      label: { en: "YOLO", it: "YOLO" },
    },
    {
      key: "opencv",
      Icon: SiOpencv,
      label: { en: "OpenCV", it: "OpenCV" },
    },
    {
      key: "unity",
      Icon: SiUnity,
      label: { en: "Unity", it: "Unity" },
    },
    {
      key: "unreal",
      Icon: SiUnrealengine,
      label: { en: "Unreal Engine", it: "Unreal Engine" },
    },
    {
      key: "javascript",
      Icon: DiJavascript1,
      label: { en: "JavaScript", it: "JavaScript" },
    },
    {
      key: "cplusplus",
      Icon: SiCplusplus,
      label: { en: "C++", it: "C++" },
    },
    {
      key: "docker",
      Icon: SiDocker,
      label: { en: "Docker", it: "Docker" },
    },
    {
      key: "git",
      Icon: DiGit,
      label: { en: "Git", it: "Git" },
    },
    {
      key: "mongodb",
      Icon: DiMongodb,
      label: { en: "MongoDB", it: "MongoDB" },
    },
    {
      key: "mysql",
      Icon: DiMysql,
      label: { en: "MySQL", it: "MySQL" },
    },
    {
      key: "redis",
      Icon: SiRedis,
      label: { en: "Redis", it: "Redis" },
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map(({ key, Icon, label }) => {
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

export default Techstack;
