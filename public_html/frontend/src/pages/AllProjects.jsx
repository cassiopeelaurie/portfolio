import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProjectsCard from "../components/cards/ProjectsCard";
import "./allprojects.css";

export default function AllProjects() {
  const navigate = useNavigate();
  const [projectTitles, setProjectTitles] = useState([]);

  const handleClick = (projectId) => {
    navigate(`/project-details/${projectId}`);
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
            <ProjectsCard
              key={index}
              projectName={project.name}
              onClick={() => handleClick(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
