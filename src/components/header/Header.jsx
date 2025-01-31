/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/images/LogoFox.jpg"; // Importando o logo
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo e Título */}
        <div className="logo-section">
          <img src={logo} alt="Logo do site Foxy Frames" className="header-logo" />
          <h1 className="header-title">Foxy <span>Frames</span></h1>
        </div>

        {/* Botão do Menu Hambúrguer */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          ☰
        </button>

        {/* Navegação (aparece quando o menu está aberto) */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Menu de navegação">
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/Fotos" onClick={() => setMenuOpen(false)}>Fotos</Link>
            </li>
            <li>
              <Link to="/Detalhes" onClick={() => setMenuOpen(false)}>Detalhes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
