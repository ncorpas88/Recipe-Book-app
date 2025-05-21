import RecipeList from "../Components/RecipeList";


function RecipeListPage({ recipes, setRecipes }) {
  return (
    <div id="lispage">
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default RecipeListPage;
