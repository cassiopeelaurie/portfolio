import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import FlashCode from "../../assets/code.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <h1 id="bottom" style={{ position: "absolute", left: "-9999px" }}>
        Pied de page
      </h1>
      <div className="logo">
        <img className="logo-img-footer" src={Logo} alt="logo"></img>
      </div>
      <h2 className="name">Cassiopée Laurie</h2>
      <div className="contacts">
        <p>cassiopee.laurie@gmail.com</p>
        <p>07 69 70 62 98</p>
        <p>
          <a
            href="https://www.linkedin.com/in/cassiop%C3%A9e-laurie-9a2022198/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/cassiopeelaurie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
      <div className="qr-code-github">
        <img src={FlashCode} alt="qr-code" />
      </div>
    </div>
  );
}
