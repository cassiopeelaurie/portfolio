import React, { useState, useEffect } from "react";
import axios from "axios";
import "./project-details.css";
import { useParams } from "react-router-dom";
import WildEats1 from "../assets/img projets portfolio/Wild Eats 1.png";
import WildEats2 from "../assets/img projets portfolio/Wild Eats 2.png";
import WildEats3 from "../assets/img projets portfolio/Wild Eats 3.png";
import WildEats4 from "../assets/img projets portfolio/Wild Eats 4.png";
import WildEats5 from "../assets/img projets portfolio/Wild Eats 5.png";
import Greenpoint1 from "../assets/img projets portfolio/Greenpoint 1.png";
import Greenpoint2 from "../assets/img projets portfolio/Greenpoint 2.png";
import Greenpoint3 from "../assets/img projets portfolio/Greenpoint 3.png";
import Greenpoint4 from "../assets/img projets portfolio/GreenPoint 4.jpeg";
import Greenpoint5 from "../assets/img projets portfolio/Greenpoint 5.jpg";
import TechCare1 from "../assets/img projets portfolio/Tech Care 1.png";
import TechCare2 from "../assets/img projets portfolio/Tech Care 2.png";
import TechCare3 from "../assets/img projets portfolio/Tech Care 3.png";
import TechCare4 from "../assets/img projets portfolio/Tech Care 4.png";
import TechCare5 from "../assets/img projets portfolio/Tech Care 5.png";
import Externatic1 from "../assets/img projets portfolio/Externatic 1.png";
import Externatic2 from "../assets/img projets portfolio/Externatic 2.png";
import Externatic3 from "../assets/img projets portfolio/Externatic 3.png";
import Externatic4 from "../assets/img projets portfolio/Externatic 4.png";
import Externatic5 from "../assets/img projets portfolio/Externatic 5.png";

export default function ProjectDetails() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState({});
  const [projectImages, setProjectImages] = useState([]);

  useEffect(() => {
    // Définissez une fonction pour récupérer les données du projet
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3310/api/projects-skills/${id}`
        );
        setProjectDetails(response.data.project[0]);
        setProjectImages(getProjectImagesById(id));
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching project skills:", error);
      }
    };

    fetchProjectDetails(); // Appelez la fonction pour récupérer les données du projet
  }, [id]);

  // Fonction pour traiter les compétences
  const formatSkills = (skills) => {
    if (skills) {
      return skills.split(",").map((skill) => skill.trim());
    } else {
      return [];
    }
  };

  const getProjectImagesById = (projectId) => {
    switch (projectId) {
      case "2":
        return [
          Greenpoint1,
          Greenpoint2,
          Greenpoint3,
          Greenpoint4,
          Greenpoint5,
        ];
      case "1":
        return [WildEats1, WildEats2, WildEats3, WildEats4, WildEats5];
      case "3":
        return [TechCare1, TechCare2, TechCare3, TechCare4, TechCare5];
      case "4":
        return [
          Externatic1,
          Externatic2,
          Externatic3,
          Externatic4,
          Externatic5,
        ];
      default:
        return []; // Retourne une liste vide si l'ID du projet n'est pas reconnu
    }
  };

  return (
    <div className="project-details-page-container">
      <div className="title-container">
        <h1 className="title-project-detail">{projectDetails.name}</h1>
      </div>
      <div className="project-section">
        <p className="description-projet">{projectDetails.description}</p>
      </div>
      <div className="comp-section">
        <p className="competence-text">
          {formatSkills(projectDetails.skills).map((skill, index) => (
            <span key={index} className="skill-bubble">
              {skill}
            </span>
          ))}
        </p>
      </div>
      <div className="project-details">
        {projectImages.map((image, index) => (
          <div key={index} className="project-section">
            <img
              src={image}
              alt={`photo-project-${index + 1}`}
              className="project-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
