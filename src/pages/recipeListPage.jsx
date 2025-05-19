import RecipeList from "../Components/RecipeList";


function recipeListPage({ recipes, setRecipes }) {
  return (
    <div id="lispage">
      <section>
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
      </section>
    </div>
  );
}

export default recipeListPage;
