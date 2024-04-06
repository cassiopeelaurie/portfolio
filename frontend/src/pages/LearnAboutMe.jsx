import React from "react";
import AboutCards from "../components/cards/AboutCards";

export default function LearnAboutMe() {
  return (
    <div className="learn-about-me-container">
      <h1 className="name-header">Cassiopée Laurie</h1>
      <div className="img-profile-page">
        <img src="coucou" alt="coucou" />
      </div>
      <AboutCards />
    </div>
  );
}
