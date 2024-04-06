import React from "react";
import ProjectsCards from "../components/cards/ProjectsCard";
import "./allprojects.css";

export default function AllProjects() {
  return (
    <div className="all-projects-container">
      <h1 className="title-all-projects">All Projects</h1>
      <ProjectsCards />
      <ProjectsCards />
      <ProjectsCards />
      <ProjectsCards />
    </div>
  );
}
