import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./selectedWork.css";
import ViewButton from "../buttons/ViewButton";
import Learn from "../../assets/learn-home.jpg";

export default function SelectedWork() {
  const navigate = useNavigate();
  const [projectSkills, setProjectSkills] = useState({});

  const handleClickProject = () => {
    navigate(`/project-details/4`);
  };

  useEffect(() => {
    // Définissez une fonction pour récupérer les données du projet
    const fetchProjectSkills = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3310/api/projects-skills/4"
        );
        setProjectSkills(response.data.project[0]); // Mettez à jour l'état avec les données de la réponse
      } catch (error) {
        console.error("Error fetching project skills:", error);
      }
    };

    fetchProjectSkills(); // Appelez la fonction pour récupérer les données du projet
  }, []);

  return (
    <div className="selected-work-container">
      <h1 className="title-about-project">Selected Work</h1>
      <div className="div-responsive-selected-work">
        <div className="img-selected-project">
          <img className="img-project" src={Learn} alt="project" />
        </div>
        <div>
          <h3 className="title-selected-project">{projectSkills.name}</h3>
          <p className="description-selected-project">
            {projectSkills.description} {projectSkills.skills}
          </p>
          <ViewButton
            className="button-project-responsive"
            buttonName="View Project"
            onClick={handleClickProject}
          />
        </div>
      </div>
    </div>
  );
}
