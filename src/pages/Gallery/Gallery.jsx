import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import foxData from "../../data/foxData";

function Gallery() {
  // Recuperar índice salvo no localStorage ou começar do zero
  const savedIndex = localStorage.getItem("currentIndex");
  const [currentIndex, setCurrentIndex] = useState(savedIndex ? parseInt(savedIndex, 10) : 0);

  // Atualizar localStorage sempre que mudar a imagem
  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? foxData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === foxData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery">
      <h1 className="gallery-title">Galeria de Fotos</h1>
      <div className="carousel">
        <div className="carousel-image">
          <button className="carousel-control prev" onClick={handlePrev}>
            ❮
          </button>
          <img src={foxData[currentIndex].src} alt={foxData[currentIndex].alt} />
          <button className="carousel-control next" onClick={handleNext}>
            ❯
          </button>
        </div>

        {/* Mini descrição e botão "Saiba mais" */}
        <div className="image-info">
          <p className="gallery-caption"><b>{foxData[currentIndex].alt}</b></p>
          <p className="gallery-description">{foxData[currentIndex].description}</p>
          <Link to={`/Detalhes/${foxData[currentIndex].slug}`} className="know-more-link">
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
