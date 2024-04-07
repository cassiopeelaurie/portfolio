import React from "react";
import "./aboutCards.css";

export default function AboutCards({ NameCards }) {
  return (
    <div className="about-cards-container">
      <h1 className="name-cards">{NameCards}</h1>
      <p></p>
    </div>
  );
}
