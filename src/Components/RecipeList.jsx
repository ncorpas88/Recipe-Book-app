import { Link } from "react-router-dom";

function RecipeList({ recipes, setRecipes }) {
  const handleDelete = (id) => {
    const recipeConfirm = window.confirm(
      "Confirma que quiere eliminar la receta"
    );
    if (recipeConfirm) {
      const updateList = recipes.filter((eacRecipe) => eacRecipe.id !== id);
      setRecipes(updateList);
    }

    
  };

  return (
    <div id="lista">
      <h2>Lista de Recetas</h2>
      <ul>
        {recipes.map((eachRecipe, i) => (
          <li key={eachRecipe.id || i}>
            <Link to={`/recipeList/${eachRecipe.id}`}>
              {eachRecipe.name} {eachRecipe.calories < 300 ? "✔️" : "❌"}
            </Link>
            <button onClick={() => handleDelete(eachRecipe.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
