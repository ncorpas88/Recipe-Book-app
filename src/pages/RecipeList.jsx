import allRecipe from "../data/recetas.json"
import { Link } from "react-router-dom"
import { useState } from "react";



function RecipeList() {

  const [recipes, setRecipes] = useState(allRecipe)
  
  const handleDelete = (id) => {
    const updateList = recipes.filter((eacRecipe) => recipes.id !== id)
    setRecipes(updateList)
  }
  
    return (
    <div>
      
      <h2>Lista de Recetas</h2>

      {allRecipe.map((eachRecipe, i) => {
        
        return(
            <li key={i}>
                <Link to={`/recipeList/${eachRecipe.id}`}>{eachRecipe.name} {eachRecipe.calories < 300 ? "✔️" : "❌"}</Link>
              <button onClick={() => handleDelete(eachRecipe.id)}>Borrar</button>
            </li>
        )
      })}
    </div>
  );




}

export default RecipeList;
