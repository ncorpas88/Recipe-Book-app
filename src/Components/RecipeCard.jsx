

function RecipeCard({eachRecipe, index, setRecipes}) {

    const handleUpdate = () => {
        const newName = prompt(eachRecipe.name)
        const newCalories = prompt(eachRecipe.calories)
        const newImage = prompt(eachRecipe.image)

        setRecipes((prevRecipe) => { //prevRecipe es el valor antes de actualizarlo
            const clone = structuredClone(prevRecipe)
            clone[index] = {name: newName, calories: Number(newCalories), image: newImage}
            return clone
        })
    }

  return (
    <div id="newlist">
      <h3>{eachRecipe.name}</h3>
      <h4>{eachRecipe.calories}</h4>
      <img src={eachRecipe.image} alt={eachRecipe.name} width="150" />
      <br />
      <button onClick={handleUpdate}>Editar</button>
    </div>
  );
}

export default RecipeCard;
