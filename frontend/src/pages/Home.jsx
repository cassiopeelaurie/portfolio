import React from "react";
import AboutHome from "../components/others/AboutHome";
import "./home.css";
import SelectedWork from "../components/others/SelectedWork";

export default function Home() {
  return (
    <div>
      <AboutHome />
      <SelectedWork />
    </div>
  );
}
