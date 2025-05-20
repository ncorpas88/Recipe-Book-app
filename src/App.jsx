import HomePage from "./pages/Homepage";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebard from "./Components/Sidebar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./Components/RecipeList";
import ItemDetails from "./pages/ItemDetails";
import AboutUs from "./pages/Aboutus";
import Error from "./pages/error";
import { useState } from "react";
import recipeData from "./data/recetas.json"

function App() {
  const [recipes, setRecipes] = useState(recipeData) 

  return (
    <>
      <Navbar />
      <Sidebard />
      
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/recipeList" element={<RecipeList recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/recipeList/:idRecipe" element={<ItemDetails recipes={recipes} setRecipes={setRecipes}/>}/>
        <Route path="*" element={<Error/> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
