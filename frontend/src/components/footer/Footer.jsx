import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import FlashCode from "../../assets/qr-code.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo">
        <img className="logo-img-footer" src={Logo} alt="logo"></img>
      </div>
      <h2 className="name">Cassiopée Laurie</h2>
      <div className="contacts">
        <p>cassiopee.laurie@gmail.com</p>
        <p>07 69 70 62 98</p>
        <p>LinkedIn</p>
        <p>Github</p>
      </div>
      <div className="qr-code-github">
        <img src={FlashCode} alt="qr-code" />
      </div>
    </div>
  );
}
