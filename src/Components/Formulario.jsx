import recipeData from "../data/recetas.json";
import { useState } from "react";

function Formulario() {
  const [recipes, setRecipes] = useState(recipeData);

  const [recipeName, setRecipeName] = useState("")
  const [recipeCalories, setRecipeCalories] = useState("")
  const [recipeImage, setRecipeImage] = useState("")

  const handleRecipeName = (event) => setRecipeName(event.target.value)
  const handleRecipeCalories = (event) => setRecipeCalories(event.target.value)
  const handleRecipeImage = (event) => setRecipeImage(event.target.value)

  return (
    <div id="formulario">
      <form>
        <span>Añadir Receta</span>
        <div>
          <label>
            Nombre Receta
            <input name="recipeName" type="text" placeholder="Nombre Receta" value={recipeName} onChange={handleRecipeName} />
          </label>
          <br />
           <label>
            Calorias
            <input name="recipeCalories" type="text" placeholder="Calorias Receta" value={recipeCalories} onChange={handleRecipeCalories} />
          </label>
          <br />
          <label>
            Imagen Plato
            <input name="recipeImage" type="url" placeholder="Imagen Plato" value={recipeImage} onChange={handleRecipeImage} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
