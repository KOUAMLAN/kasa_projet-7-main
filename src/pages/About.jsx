import React, { useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const aboutSections = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: "Service",
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
  }
];

function About() {
  // Pour ouvrir/fermer chaque Collapse indépendamment
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <section>
      <Banner
        image="/images/home-banner.png"
        altText="Bannière À propos"
      />
      <div className="about-collapses">
        {aboutSections.map((section, idx) => (
          <Collapse
            key={section.title}
            title={section.title}
            isOpen={openIndexes.includes(idx)}
            onClick={() => handleToggle(idx)}
          >
            {section.content}
          </Collapse>
        ))}
      </div>
    </section>
  );
}

export default About;