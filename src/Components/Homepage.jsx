import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebard from "./Sidebard";
import Footer from "./Footer";
import recetasData from "../data/recetas.json";
import './Homepage.css';
import chicote from "../image/chicote.png";

function HomePage () {

    const [recetasObj, setRecetasObj] = useState(recetasData)
    return (

        <>
        <Navbar />
        <Sidebard />
            <div className="info-container">
                <h1 className="titulo">Encuentra tus recetas favoritas</h1>
                <img className="chicote"  src={chicote} alt="chicotee" />
            
        </div>
        <Footer />

        
        </>


    )
};

export default HomePage;