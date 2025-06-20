import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "'Montserrat', Arial, sans-serif"  // Ajout ici
    }}>
      <h1 style={{ fontSize: "3rem", color: "#FF6060" }}>404</h1>
      <p style={{ fontSize: "1.5rem", margin: "1rem 0", color: "#FF6060" }}>
        Oups ! Cette page n’existe pas ou n’est plus disponible.
      </p>
      <Link to="/" style={{
        marginTop: "1rem",
        color: "#3498db",
        textDecoration: "underline",
        fontSize: "1.1rem"
      }}>
        Retour à l’accueil
      </Link>
    </section>
  );
}

export default NotFound;