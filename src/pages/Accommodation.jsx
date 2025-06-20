import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../data/accommodations.json";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import "../styles/accommodation.scss";

function Accommodation() {
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id);

  if (!accommodation) return <Navigate to="/404" replace />;

  const { host } = accommodation;
  const hostFullName = host.firstName && host.lastName
    ? `${host.firstName} ${host.lastName}`
    : host.name || "";

  // Etat pour savoir quel Collapse est ouvert (null = aucun)
  const [openCollapse, setOpenCollapse] = useState(null);

  // Fonction pour basculer l'ouverture d'un Collapse
  const toggleCollapse = (index) => {
    setOpenCollapse(prev => (prev === index ? null : index));
  };

  return (
    <section className="accommodation-detail">
      <Gallery pictures={accommodation.pictures} />

      <div className="accommodation-header">
        {/* Desktop layout */}
        <div className="header-main">
          <div className="header-left">
            <h1 className="accommodation-title">{accommodation.title}</h1>
            <p className="accommodation-location">{accommodation.location}</p>
            <div className="tags">
              {accommodation.tags.map((tag, idx) => (
                <Tag key={idx} tag={tag} />
              ))}
            </div>
          </div>
          <div className="header-right">
            <div className="host-info">
              <span className="host-name">{hostFullName}</span>
              <img src={host.picture} alt={hostFullName} className="host-img" />
            </div>
            <div className="rating-desktop">
              <Rating rating={parseInt(accommodation.rating, 10)} />
            </div>
          </div>
        </div>
        {/* Mobile layout */}
        <div className="rating-host-row-mobile">
          <div className="rating-mobile">
            <Rating rating={parseInt(accommodation.rating, 10)} />
          </div>
          <div className="host-mobile-group">
            <span className="host-name">{hostFullName}</span>
            <img src={host.picture} alt={hostFullName} className="host-img" />
          </div>
        </div>
      </div>

      <div className="accommodation-collapses">
        <Collapse
          title="Description"
          isOpen={openCollapse === 0}
          onClick={() => toggleCollapse(0)}
        >
          <p className="accommodation-description">{accommodation.description}</p>
        </Collapse>
        <Collapse
          title="Équipements"
          isOpen={openCollapse === 1}
          onClick={() => toggleCollapse(1)}
        >
          <ul className="accommodation-equipments">
            {accommodation.equipments.map((equip, idx) => (
              <li key={idx}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}

export default Accommodation;