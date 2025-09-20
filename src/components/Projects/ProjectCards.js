import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useLanguage } from "../../context/LanguageContext";

function ProjectCards(props) {
  const { language } = useLanguage();

  const labels = {
    en: {
      explore: "Explore",
      blog: "Blog",
      github: "GitHub",
      demo: "Demo",
    },
    it: {
      explore: "Scopri",
      blog: "Blog",
      github: "GitHub",
      demo: "Demo",
    },
  };

  const activeLabels = labels[language] || labels.en;
  const isInternalLink = Boolean(props.internalLink);
  const hasPrimaryLink = isInternalLink || Boolean(props.ghLink);

  const primaryButtonProps = isInternalLink
    ? {
        as: Link,
        to: props.internalLink,
        target: undefined,
      }
    : {
        href: props.ghLink,
        target: "_blank",
        rel: "noreferrer",
      };

  const primaryButtonLabel = isInternalLink
    ? props.internalLabel || activeLabels.explore
    : props.isBlog
    ? activeLabels.blog
    : activeLabels.github;

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className={`project-card-img ${props.imgClassName || ""}`.trim()}
      />
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-text">{props.description}</Card.Text>

        {(hasPrimaryLink || (!props.isBlog && props.demoLink)) && (
          <div className="project-card-actions">
            {hasPrimaryLink && (
              <Button variant="primary" {...primaryButtonProps}>
                {isInternalLink ? <AiOutlineFundProjectionScreen /> : <BsGithub />} &nbsp;
                {primaryButtonLabel}
              </Button>
            )}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> &nbsp;
                {activeLabels.demo}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
