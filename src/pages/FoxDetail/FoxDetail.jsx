/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import foxData from "../../data/foxData";
import "./FoxDetail.css";

function FoxDetail() {
  const { slug } = useParams(); // Captura o slug da URL
  const navigate = useNavigate();

  // Encontra a raposa correspondente no banco de dados
  const fox = foxData.find((f) => f.slug === slug);

  if (!fox) {
    return <h2>RAPOSA NÃO ENCONTRADA!</h2>;
  }

  return (
    <div className="fox-detail-container">
      <div className="fox-detail">
        {/* Seção da imagem da raposa */}
        <div className="fox-image-container">
          <img src={fox.src} alt={fox.alt} className="fox-image" />
        </div>

        {/* Seção das informações da raposa */}
        <div className="fox-info">
          <h1 className="fox-title">{fox.alt}</h1>
          <p className="fox-scientific-name">
            <strong>Nome Científico:</strong> {fox.scientificName}
          </p>
          <p className="fox-size">
            <strong>Tamanho:</strong> {fox.size}
          </p>
          <p className="fox-weight">
            <strong>Peso:</strong> {fox.weight}
          </p>
          <p className="fox-habitat">
            <strong>Habitat:</strong> {fox.habitat}
          </p>
          <p className="fox-diet">
            <strong>Alimentação:</strong> {fox.diet}
          </p>
          <p className="fox-description">{fox.fullDescription}</p>
        </div>
      </div>

      {/* Botão de voltar abaixo de tudo */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Voltar
      </button>
    </div>
  );
}

export default FoxDetail;
