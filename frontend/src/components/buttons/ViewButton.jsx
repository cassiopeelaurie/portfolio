import React from "react";
import "./viewButton.css";

export default function ViewButton({ buttonName, onClick }) {
  return (
    <div className="button-view-container">
      <button className="button-view" onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
}
