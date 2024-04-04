import React from "react";
import ViewButton from "../buttons/ViewButton";
import Learn from "../../assets/learn-home.jpg";

export default function SelectedWork() {
  return (
    <div className="selected-work-container">
      <h1 className="title-about-home">Selected Work</h1>
      <div className="img-selected-project">
        <img className="img-project" src={Learn} alt="project" />
      </div>
      <h3 className="title-selected-project">Title</h3>
      <p className="description-selected-project">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        pariatur dolorum? Cum nihil amet recusandae quas sunt fuga...
      </p>
      <ViewButton buttonName="View Project" />
    </div>
  );
}
