import React from "react";
import "./projectsCard.css";

export default function ProjectsCard({ projectName, onClick }) {
  return (
    <div className="project-card-container" onClick={onClick}>
      <h1 className="title-project-card">{projectName}</h1>
    </div>
  );
}
