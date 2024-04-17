import React from "react";
import "./aboutCards.css";

export default function AboutCards({ NameCards, className, textCards }) {
  return (
    <div className={`about-cards-container ${className}`}>
      <div className="name-cards-container">
        <h1 className="name-cards">{NameCards}</h1>
      </div>
      <div className="text-cards-container">
        {typeof textCards === "string" ? (
          <p className="text-cards">{textCards}</p>
        ) : (
          <div className="text-cards">{textCards}</div>
        )}
      </div>
    </div>
  );
}
