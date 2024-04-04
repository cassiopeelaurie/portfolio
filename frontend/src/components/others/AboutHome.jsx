import React from "react";
import Learn from "../../assets/learn-home.jpg";
import ViewButton from "../buttons/ViewButton";
import "./aboutHome.css";

export default function AboutHome() {
  return (
    <div className="about-home-container">
      <h1 className="title-about-home">Web Développeur</h1>
      <p className="text-about-home">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        pariatur tempore corporis atque dolorum? Cum nihil amet recusandae quas
        sunt fuga...
      </p>
      <ViewButton buttonName="View Profile" />
      <div className="img-about-home">
        <img className="img-home" src={Learn} alt="logo" />
      </div>
    </div>
  );
}
