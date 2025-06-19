import React from "react";
import Banner from "../components/Banner";
import CardGrid from "../components/CardGrid";

function Home() {
  return (
    <main>
 <Banner
  image="/images/image-source-1.png"
  altText="Bannière d'accueil"
  text="Chez vous, partout et ailleurs"
/>
      <CardGrid />
    </main>
  );
}
export default Home;
