/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/images/LogoFox.jpg"; // importando o logo
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="Logo do site Foxy Frames" className="header-logo" />
          <h1 className="header-title">Foxy Frames</h1>
        </div>

        {/* Navegação */}
        <nav className="nav" aria-label="Menu de navegação">
          <ul className="nav-links">
            <li>
              <Link to="/" aria-label="Ir para a página inicial">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Fotos" aria-label="Ir para a galeria de fotos">
                Fotos
              </Link>
            </li>
            <li>
              <Link to="/Detalhes" aria-label="Ir para os detalhes das raposas">
                Detalhes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

