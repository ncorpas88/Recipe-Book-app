import React, { useState } from "react";
import recetasData from "../data/recetas.json";
import "./Homepage.css";
import chicote from "../image/chicote.png";
import RecipeList from "../Components/RecipeList";
import Formulario from "../Components/Formulario";


function HomePage() {
  const [recetasObj, setRecetasObj] = useState(recetasData);
  return (
    <>
      <div className="info-container">
        <h1 className="titulo">Encuentra tus recetas favoritas</h1>
        <img className="chicote" src={chicote} alt="chicotee" />
        <Formulario />
        <RecipeList />
      </div>
    </>
  );
}

export default HomePage;
