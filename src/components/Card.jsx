import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.scss";

function Card({ accommodation }) {
  return (
    <Link to={`/accommodation/${accommodation.id}`} className="card">
      <div className="card-img-container">
        <img src={accommodation.cover} alt={accommodation.title} className="card-img" />
        <div className="card-overlay"></div>
        <div className="card-title-overlay">{accommodation.title}</div>
      </div>
    </Link>
  );
}
export default Card;