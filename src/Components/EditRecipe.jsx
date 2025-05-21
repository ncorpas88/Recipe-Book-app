
import RecipeCard from "./RecipeCard";



function EditRecipe({recipes, setRecipes}) {
  return (
    <div id="newrecipe">
      <h2>Editar Receta</h2>
      {recipes.map((eachRecipe, index) => {
        return (
  <RecipeCard 
        key={eachRecipe.id || index} 
        eachRecipe={eachRecipe} // paso el objeto de la receta actual
        index={index}
        setRecipes={setRecipes} //modifica la lista de recetas
        />
        )
      })}
    </div>
  );
}

export default EditRecipe;
