import React from "react";
import awtoLogo from "../assets/awto-header.svg";

const Navbar = () => {
  return (
    <div className="headerContainer container">
      <div className="headerLogoContainer">
        <img src={awtoLogo} alt="Awto Logo" />
      </div>
      <div className="butonsContainer">
        <a href="/home" className="headerBtn">
          Nossos Pilares
        </a>
        <a href="/home" className="headerBtn">
          Contato
        </a>
        <a href="/home" className="headerBtn">
          Sugere Pontos Awto
        </a>
      </div>
    </div>
  )
}
export default Navbar;