import React from "react";
import "./aboutCards.css";

export default function AboutCards({ NameCards, className }) {
  return (
    <div className={`about-cards-container ${className}`}>
      <h1 className="name-cards">{NameCards}</h1>
      <p></p>
    </div>
  );
}
