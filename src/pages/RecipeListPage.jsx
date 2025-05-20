import RecipeList from "../Components/RecipeList";
import "./RecipeListPage.css";


function recipeListPage({ recipes, setRecipes }) {
  return (
    <div id="lispage">
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default recipeListPage;
