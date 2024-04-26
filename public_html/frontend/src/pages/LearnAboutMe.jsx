import React, { useState, useEffect } from "react";
import axios from "axios";
import "./learnAboutMe.css";
import AboutCards from "../components/cards/AboutCards";
import Pdp from "../assets/pdp.png";

export default function LearnAboutMe() {
  const [formations, setFormations] = useState([]);
  const [tools, setTools] = useState([]);
  const [hardSkills, setHardSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formationsResponse = await axios.get(
          "http://localhost:3310/api/formations"
        );
        const toolsResponse = await axios.get(
          "http://localhost:3310/api/tools"
        );
        const hardSkillsResponse = await axios.get(
          "http://localhost:3310/api/hard-skills"
        );

        setFormations(formationsResponse.data.formation[0]);
        setTools(toolsResponse.data.tools);
        setHardSkills(hardSkillsResponse.data.skills);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="learn-about-me-container">
      <div className="div-responsive-about-me">
        <div className="name-header-container">
          <div className="name-text">
            <h1 className="name-header">Cassiopée Laurie</h1>
            <div className="cv-container">
              <a
                className="CV"
                href="../assets/Cassiopée Laurie CV.pdf"
                download="Cassiopée Laurie CV.pdf"
              >
                Télécharger le CV
              </a>
            </div>
          </div>
        </div>
        <div className="img-profile-page">
          <img className="img-pdp" src={Pdp} alt="img-pdp" />
        </div>
      </div>
      <div className="width-pages-des-cards">
        <div className="three-cards">
          <AboutCards
            NameCards="Formations"
            className="formation-card"
            textCards={
              <>
                <h2 className="formation-name">{formations.name}</h2>
                {formations.description}
              </>
            }
          />
          <AboutCards
            NameCards="Hard Skills"
            className="the-other-side-card"
            textCards={hardSkills.map((skill, index) => (
              <div key={index}>{skill.name}</div>
            ))}
          />
          <AboutCards
            NameCards="Outils"
            className="outils-card"
            textCards={tools.map((tool, index) => (
              <div key={index}>{tool.name}</div>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
