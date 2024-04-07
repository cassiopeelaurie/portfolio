import React from "react";
import "./learnAboutMe.css";
import AboutCards from "../components/cards/AboutCards";
import Pdp from "../assets/pdp.jpg";

export default function LearnAboutMe() {
  return (
    <div className="learn-about-me-container">
      <div className="name-header-container">
        <h1 className="name-header">Cassiopée Laurie</h1>
      </div>
      <div className="img-profile-page">
        <img className="img-pdp" src={Pdp} alt="coucou" />
      </div>
      <AboutCards NameCards="Formations" />
      <AboutCards NameCards="Technologies" />
      <AboutCards NameCards="Outils" />
    </div>
  );
}
