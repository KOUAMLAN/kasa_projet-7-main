import React from "react";
import "../styles/rating.scss";

function Rating({ rating }) {
  // Sécurise la note entre 0 et 5, et la force à être un entier
  const safeRating = Math.max(0, Math.min(5, Math.floor(Number(rating) || 0)));
  return (
    <div className="rating" aria-label={`Note : ${safeRating} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < safeRating ? "star active" : "star"} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default Rating;
