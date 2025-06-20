import React, { useState } from "react";
import "../styles/gallery.scss";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  if (total === 0) return null;

  const prev = () => setIndex(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex(i => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="gallery">
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className="gallery-img"
        draggable={false}
      />
      {total > 1 && (
        <>
          <button className="gallery-arrow gallery-prev" onClick={prev} aria-label="Précédent">
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="gallery-arrow gallery-next" onClick={next} aria-label="Suivant">
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="gallery-count">{index + 1}/{total}</span>
        </>
      )}
    </div>
  );
}

export default Gallery;