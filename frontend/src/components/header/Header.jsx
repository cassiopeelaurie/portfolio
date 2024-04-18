import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./header.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const handleProjectsClick = () => {
    navigate("/all-project");
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleContactMeClick = () => {
    window.location.href = "#bottom";
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img
          className="logo-img"
          src={Logo}
          alt="logo"
          onClick={handleLogoClick}
        ></img>
      </div>
      <div className="titles">
        <h1 className="all-projects" onClick={handleProjectsClick}>
          All Projects
        </h1>
        <h1 className="contact-me" onClick={handleContactMeClick}>
          Contact Me
        </h1>
      </div>
    </div>
  );
}
