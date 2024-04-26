import React from "react";
import "./viewButton.css";

export default function ViewButton({ buttonName, onClick, className }) {
  return (
    <div className="button-view-container">
      <button className={`button-view ${className}`} onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
}
