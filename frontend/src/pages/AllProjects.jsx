import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProjectsCards from "../components/cards/ProjectsCard";
import "./allprojects.css";

export default function AllProjects() {
  const history = useHistory();
  const [projectTitles, setProjectTitles] = useState([]);

  const handleClick = (projectId) => {
    history.push(`/projects/${projectId}`);
  };

  useEffect(() => {
    // Définissez une fonction pour récupérer les données du projet
    const fetchProjectTitles = async () => {
      try {
        const response = await axios.get("http://localhost:3310/api/projects");
        setProjectTitles(response.data.project); // Mettez à jour l'état avec les données de la réponse
      } catch (error) {
        console.error("Error fetching project skills:", error);
      }
    };

    fetchProjectTitles(); // Appelez la fonction pour récupérer les données du projet
  }, []);

  return (
    <div className="all-projects-container">
      <h1 className="title-all-projects">All Projects</h1>
      <div className="title-and-cards">
        <div className="all-projects-cards">
          {projectTitles.map((project, index) => (
            <ProjectsCards key={index} projectName={project.name} />
          ))}
          <div onClick={() => handleClick(projectId)}>Project 1</div>
          <div onClick={() => handleClick(projectId)}>Project 2</div>
          <div onClick={() => handleClick(projectId)}>Project 3</div>
          <div onClick={() => handleClick(projectId)}>Project 4</div>
        </div>
      </div>
    </div>
  );
}
