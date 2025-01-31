/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import raposaDeDarwin from "../../assets/images/raposa_de_darwin.jpg";
import raposaAfega from "../../assets/images/raposa_afega.jpg";
import raposaVermelha from "../../assets/images/Raposa-vermelha.jpg";
import raposa from "../../assets/images/fundo.png"; 
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Banner */}
      <section className="home-banner">
        <div className="banner-content">
          <h1 className="banner-title">Bem-vindo ao Foxy Frames</h1>
          <p className="banner-subtitle">Descubra o mundo fascinante das raposas!</p>
        </div>
      </section>

      {/* Links principais */}
      <section className="home-main-links">
        <div className="main-link">
          <p>Descubra mais sobre as raposas e seus habitats.
          </p>
          <img src={raposa} alt="raposa" className="highlight-fundo"/>
          <a href="/Detalhes" className="main-link-button">Informações</a>
        </div>
        <div className="main-link">
          <p>Veja a galeria de fotos das raposas</p>
          <img src={raposa} alt="raposa" className="highlight-fundo"/>
          <Link to="/Fotos" className="main-link-button">Galeria de Fotos</Link>
        </div>
      </section>

      {/* Destaques */}
      <section className="home-highlights">
        <h2 className="highlights-title">Destaques</h2>
        <div className="highlight-images">
          <div className="highlight-card">
            <img src={raposaDeDarwin} alt="Raposas 1" />
            <p className="highlight-description">A raposa-de-Darwin (Lycalopex fulvipes) é um pequeno canídeo endêmico do Chile, conhecido por sua adaptação única ao ambiente local.</p>
          </div>
          <div className="highlight-card">
            <img src={raposaAfega} alt="Raposas 2" />
            <p className="highlight-description">A raposa-afegã (Vulpes cana) é uma pequena raposa que vive em regiões semi-áridas e montanhosas do Oriente Médio e Ásia Central.</p>
          </div>
          <div className="highlight-card">
            <img src={raposaVermelha} alt="Raposas 3" />
            <p className="highlight-description">A raposa-vermelha (Vulpes vulpes) é a maior das raposas, encontrada no hemisfério Norte, incluindo América do Norte, Europa, Ásia e partes do Norte da África.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
