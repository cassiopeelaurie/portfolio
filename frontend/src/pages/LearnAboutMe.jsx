import React from "react";
import "./learnAboutMe.css";
import AboutCards from "../components/cards/AboutCards";
import Pdp from "../assets/pdp.jpg";

export default function LearnAboutMe() {
  return (
    <div className="learn-about-me-container">
      <div className="div-responsive-about-me">
        <div className="name-header-container">
          <div className="name-text">
            <h1 className="name-header">Cassiopée Laurie</h1>
          </div>
        </div>
        <div className="img-profile-page">
          <img className="img-pdp" src={Pdp} alt="coucou" />
        </div>
      </div>
      <div className="width-pages-des-cards">
        <div className="three-cards">
          <AboutCards NameCards="Formations" className="formation-card" />
          <AboutCards NameCards="Hard Skills" className="the-other-side-card" />
          <AboutCards NameCards="Outils" className="outils-card" />
        </div>
      </div>
    </div>
  );
}
