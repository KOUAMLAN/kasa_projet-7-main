import React from "react";
import data from "../data/accommodations.json";
import Card from "./Card";
import "../styles/card.scss";

function CardGrid() {
  return (
    <section className="card-grid">
      {data.map((accommodation) => (
        <Card key={accommodation.id} accommodation={accommodation} />
      ))}
    </section>
  );
}

export default CardGrid;