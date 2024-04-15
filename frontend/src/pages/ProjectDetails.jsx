import React, { useState, useEffect } from "react";
import axios from "axios";
import "./project-details.css";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    // Définissez une fonction pour récupérer les données du projet
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3310/api/projects-skills/${id}"
        );
        setProjectDetails(response.data.project[0]); // Mettez à jour l'état avec les données de la réponse
      } catch (error) {
        console.error("Error fetching project skills:", error);
      }
    };

    fetchProjectDetails(); // Appelez la fonction pour récupérer les données du projet
  }, [id]);

  return (
    <div className="project-details-page-container">
      <div className="title-container">
        <h1 className="title-project-detail">{projectDetails.name}</h1>
      </div>
      <div className="project-details">
        <div className="project-section">
          <img src="coucou" alt="photo-project-1" />
        </div>
        <div className="project-section">
          <p className="description-projet">{projectDetails.description}</p>
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-2" />
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-3" />
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-4" />
        </div>
        <div className="project-section">
          <p className="liens">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            dolorem.
          </p>
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-5" />
        </div>
      </div>
    </div>
  );
}
