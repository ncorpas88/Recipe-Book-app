import recipeData from "../data/recetas.json";
import { useState } from "react";

function Formulario({recipes, setRecipes}) {

  const [recipeName, setRecipeName] = useState("")
  const [recipeCalories, setRecipeCalories] = useState("")
  const [recipeImage, setRecipeImage] = useState("")


  function handleSumit(event) {
    event.preventDefault()


    const newRecipe = {
      id: Date.now(),
      name: recipeName,
      calories: Number(recipeCalories),
      image: recipeImage,
    }

    setRecipes([...recipes,newRecipe])

    setRecipeName("")
    setRecipeCalories("")
    setRecipeImage("")

  }

  return (
    <div id="formulario">
      <form onSubmit={handleSumit}>
        <span>Añadir Receta</span>
        <div>
          <label>
            Nombre Receta
            <input name="recipeName" type="text" placeholder="Nombre Receta" value={recipeName} onChange={(event) => setRecipeName(event.target.value)} />
          </label>
          <br />
           <label>
            Calorias
            <input name="recipeCalories" type="text" placeholder="Calorias Receta" value={recipeCalories} onChange={(event) => setRecipeCalories(event.target.value)} />
          </label>
          <br />
          <label>
            Imagen Plato
            <input name="recipeImage" type="url" placeholder="Imagen Plato" value={recipeImage} onChange={(event) => setRecipeImage(event.target.value)} />
          </label>
          <br />
          <button type="submit">Añadir Receta</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
