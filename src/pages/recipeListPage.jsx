
import RecipeList from "../Components/RecipeList";

function recipeListPage({recipes, setRecipes}) {
  return (
    <div>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default recipeListPage;
