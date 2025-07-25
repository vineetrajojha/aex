import React from 'react';
import './gallery.css';

const galleryImages = [
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
    alt: 'Wintry Mountain Landscape',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(19).webp',
    alt: 'Sunset at the Beach',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
    alt: 'Mountains in the Clouds',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
    alt: 'Boat on Calm Water',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
    alt: 'Waves at Sea',
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="gallery-section">
      <h2>Event Gallery</h2>
      <p className="gallery-desc">
        Explore moments from our past events and get inspired!
      </p>
      <div className="gallery-custom-layout">
        <div className="gallery-row gallery-row-top">
          <div className="gallery-cell gallery-cell-square">
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="gallery-img-square" />
          </div>
          <div className="gallery-cell gallery-cell-square">
            <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="gallery-img-square" />
          </div>
          <div className="gallery-cell gallery-cell-square">
            <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="gallery-img-square" />
          </div>
        </div>
        <div className="gallery-row gallery-row-bottom">
          <div className="gallery-cell gallery-cell-large">
            <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="gallery-img-large" />
          </div>
          <div className="gallery-cell gallery-cell-large">
            <img src={galleryImages[4].src} alt={galleryImages[4].alt} className="gallery-img-large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 