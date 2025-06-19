import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <section>
  <Banner
  image="/images/home-banner.png"
  altText="Bannière À propos"
  text="Chez vous, partout et ailleurs"
/>
      <div className="about-collapses">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </Collapse>
        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
        </Collapse>
      </div>
    </section>
  );
}

export default About;