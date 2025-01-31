
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import foxData from "../../data/foxData";


function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? foxData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === foxData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gallery">
      <h1 className="gallery-title">Galeria de Fotos</h1>
      <div className="carousel">
        <button className="carousel-control prev" onClick={handlePrev}>
          ❮
        </button>
        <div className="carousel-image">
          <img
            src={foxData[currentIndex].src}
            alt={foxData[currentIndex].alt}
            onClick={openModal}
          />
        </div>
        <button className="carousel-control next" onClick={handleNext}>
          ❯
        </button>
      </div>
      <p className="gallery-caption">{foxData[currentIndex].alt}</p>

      {/* Modal para exibição ampliada */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={foxData[currentIndex].src}
              alt={foxData[currentIndex].alt}
              className="modal-image"
            />
            <p className="modal-description">
              <b>{foxData[currentIndex].alt}</b>:{" "}
              {foxData[currentIndex].description}
            </p>
            <Link to={`/Detalhes/${foxData[currentIndex].slug}`} className="know-more-link">
                Saiba mais
            </Link>
          </div>
        </div>
      )}
      <p className="modal-description">
        {" "}
        <b>OBS: Abra a imagem para saber mais sobre as raposas!</b>
      </p>
    </div>
  );
}

export default Gallery;
