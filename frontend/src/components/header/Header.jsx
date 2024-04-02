import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img className="logo-img" src={Logo} alt="logo"></img>
      </div>
      <div className="titles">
        <h1 className="all-projects">All Projects</h1>
        <h1 className="contact-me">Contact Me</h1>
      </div>
    </div>
  );
}
