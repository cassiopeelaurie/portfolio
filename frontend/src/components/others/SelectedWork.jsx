import React, { useState, useEffect } from "react";
import axios from "axios";
import "./selectedWork.css";
import ViewButton from "../buttons/ViewButton";
import Learn from "../../assets/learn-home.jpg";

export default function SelectedWork() {
  const [projectSkills, setProjectSkills] = useState(null);

  useEffect(() => {
    // Définissez une fonction pour récupérer les données du projet
    const fetchProjectSkills = async () => {
      try {
        const response = await axios.get("/projects-skills/:id");
        setProjectSkills(response.data); // Mettez à jour l'état avec les données de la réponse
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
          <h3 className="title-selected-project">{projectData.name}</h3>
          <p className="description-selected-project">
            Vous êtes soucieux de l'environnement ? Vous souhaitez connaître
            votre empreinte carbone et souhaitez vous améliorer ? GreenPoint est
            fait pour vous ! Grace à une API externe, nous pouvons la calculer
            pour vous...
          </p>
          <ViewButton
            className="button-project-responsive"
            buttonName="View Project"
          />
        </div>
      </div>
    </div>
  );
}
