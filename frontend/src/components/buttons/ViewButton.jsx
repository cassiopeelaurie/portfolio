import React from "react";
import "./viewButton.css";

export default function ViewButton({ buttonName }) {
  return (
    <div className="button-view-container">
      {" "}
      <button className="button-view"> {buttonName}</button>
    </div>
  );
}
