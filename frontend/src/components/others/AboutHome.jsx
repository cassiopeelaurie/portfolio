import React from "react";
import Learn from "../../assets/learn-home.jpg";
import ViewButton from "../buttons/ViewButton";
import { useNavigate } from "react-router-dom";
import "./aboutHome.css";

export default function AboutHome() {
  const navigate = useNavigate();

  const handleButtonProfileClick = () => {
    navigate("/about-me");
  };

  return (
    <div className="about-home-container">
      <div className="div-desktop-responsive">
        <h1 className="title-about-home">Web Développeuse</h1>
        <p className="text-about-home">
          Plongée dans l'univers du développement Web et Web Mobile depuis peu,
          j'ai énormément appris à l'école Tech de la Wild Code School à
          Bordeaux. Formation dans laquelle j'ai pu découvrir Javascript et son
          framework React. Ainsi que d'autres technologies...
        </p>
        <div className="button-about-home-responsive">
          <ViewButton
            className="button-responsive-home-profil"
            buttonName="View Profile"
            onClick={handleButtonProfileClick}
          />
        </div>
      </div>
      <div className="img-about-home">
        <img className="img-home" src={Learn} alt="logo" />
      </div>
    </div>
  );
}
