import React from "react";
import "./project-details.css";

export default function ProjectDetails() {
  return (
    <div className="project-details-page-container">
      <div className="title-container">
        <h1 className="title-project-detail">TITLE</h1>
      </div>
      <div className="project-details">
        <div className="project-section">
          <img src="coucou" alt="photo-project-1" />
        </div>
        <div className="project-section">
          <p className="description-projet">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur atque voluptatibus quisquam velit deserunt veritatis
            laudantium, illum non vitae pariatur magnam, voluptatum, quia libero
            repudiandae. Fugiat, dolorem blanditiis! Modi, quas?
          </p>
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-2" />
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-3" />
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-4" />
        </div>
        <div className="project-section">
          <p className="liens">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            dolorem.
          </p>
        </div>
        <div className="project-section">
          <img src="coucouu" alt="photo-project-5" />
        </div>
      </div>
    </div>
  );
}
