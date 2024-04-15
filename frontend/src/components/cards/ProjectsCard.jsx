import React from "react";
import "./projectsCard.css";

export default function ProjectsCard({ projectName }) {
  return (
    <div className="project-card-container">
      <h1 className="title-project-card">{projectName}</h1>
    </div>
  );
}
