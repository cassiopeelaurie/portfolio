import React from "react";
import Learn from "../../assets/learn-home.jpg";
import ViewButton from "../buttons/ViewButton";
import "./aboutHome.css";

export default function AboutHome() {
  return (
    <div className="about-home-container">
      <h1 className="title-about-home">Web Développeuse</h1>
      <p className="text-about-home">
        Plongée dans l'univers du développement Web et Web Mobile depuis peu,
        j'ai énormément appris à l'école Tech de la Wild Code School à Bordeaux.
        Formation dans laquelle j'ai pu découvrir Javascript et son framework
        React. Ainsi que d'autres technologies...
      </p>
      <ViewButton buttonName="View Profile" />
      <div className="img-about-home">
        <img className="img-home" src={Learn} alt="logo" />
      </div>
    </div>
  );
}
