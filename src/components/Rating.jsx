import React from "react";
import "../styles/rating.scss";

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "star active" : "star"}>★</span>
      ))}
    </div>
  );
}
export default Rating;
