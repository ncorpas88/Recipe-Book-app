import React, { useState } from "react";
import recetasData from "../data/recetas.json";
import "./Homepage.css";
import chicote from "../image/chicote.png";
import RecipeList from "../Components/RecipeList";
import Formulario from "../Components/Formulario";


function HomePage({recipes,setRecipes}) {

  return (
    <>
      <div className="info-container">
        <h1 className="titulo">Encuentra tus recetas favoritas</h1>
        <img className="chicote" src={chicote} alt="chicotee" />
        <Formulario recipes={recipes} setRecipes={setRecipes} />
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
      </div>
    </>
  );
}

export default HomePage;
