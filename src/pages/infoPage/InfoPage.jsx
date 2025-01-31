/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foxData from "../../data/foxData";
import "./InfoPage.css";

function InfoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFoxes, setFilteredFoxes] = useState([]);
  const navigate = useNavigate();

  // Função para lidar com busca
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtrar raposas pelo termo digitado
    const results = foxData.filter((fox) =>
      fox.alt.toLowerCase().includes(term)
    );
    setFilteredFoxes(results);
  };

  // Função para redirecionar ao clicar em uma raposa
  const handleSelectFox = (slug) => {
    navigate(`/Detalhes/${slug}`);
  };

  // Curiosidades sobre raposas
  const curiosities = [
    "A raposa do Ártico tem pelos nas patas, que funcionam como uma espécie de 'sapatinho' para protegê-la do gelo.",
    "A raposa vermelha é uma das espécies de raposas mais adaptáveis, vivendo tanto em áreas urbanas quanto rurais.",
    "A raposa-do-deserto, também conhecida como feneco, pode sobreviver sem água por longos períodos, obtendo hidratação dos alimentos.",
    "Algumas raposas, como a raposa cinzenta, são ótimas escaladoras de árvores, uma habilidade rara em canídeos.",
    "A raposa de Ruppell é conhecida por seu grito agudo, que pode ser ouvido a longas distâncias no deserto.",
    "A raposa afegã consegue correr a até 50 km/h, sendo uma excelente caçadora em terrenos áridos.",
    "A raposa veloz é considerada a espécie de raposa mais rápida do mundo, podendo atingir velocidades acima de 60 km/h.",
    "A raposa do Himalaia tem uma aparência única com orelhas arredondadas e uma pelagem espessa para se proteger do frio.",
    "A raposa do campo é comum no Brasil e é frequentemente confundida com outros canídeos por seu tamanho pequeno.",
    "A raposa-das-estepes vive em ambientes extremamente frios e usa sua pelagem densa como isolamento térmico.",
    "Raposa-de-darwin: Pode se comunicar com outras raposas ao erguer e abaixar sua cauda.",
    "Raposa-do-deserto: Suas enormes orelhas ajudam a resfriar o corpo e detectar insetos subterrâneos."
  ];

  return (
    <div className="info-page">
      <h1 className="info-title">Informações sobre Raposas</h1>

      {/* Campo de busca */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite o nome da raposa..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Resultados da busca */}
      {searchTerm && (
        <div className="search-results">
          {filteredFoxes.length > 0 ? (
            filteredFoxes.map((fox) => (
              <div
                key={fox.id}
                className="search-item"
                onClick={() => handleSelectFox(fox.slug)}
              >
                <img src={fox.src} alt={fox.alt} className="search-image" />
                <span>{fox.alt}</span>
              </div>
            ))
          ) : (
            <p className="no-results">Nenhuma raposa encontrada. Digite o nome correto da raposa!</p>
          )}
        </div>
      )}

        {/* Curiosidades */}
        <div className="curiosities">
          <h2>Curiosidades sobre Raposas</h2>
          <div className="curiosities-grid">
            {curiosities.map((curiosity, index) => (
              <div key={index} className="curiosity-block">
                <p>{curiosity}</p>
              </div>
            ))}
          </div>
        </div>

      {/* Links de acesso rápido */}
      <div className="quick-links">
        <h2>Acesso Rápido</h2>
        <ul>
          {foxData.map((fox) => (
            <li key={fox.id}>
              <Link to={`/Detalhes/${fox.slug}`}>
                <img src={fox.src} alt={fox.alt} className="quick-link-image" />
                {fox.alt}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InfoPage;
