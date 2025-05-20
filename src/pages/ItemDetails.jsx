import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function ItemDetails({recipes, setRecipes}) {

  const {idRecipe} = useParams()
  const navigate = useNavigate()

  const filterRecipe = recipes.find((eachRecipe) => String(eachRecipe.id) === idRecipe)

  useEffect(() => {
    if(!filterRecipe){
      navigate("/recipeList")
    }
  }, [filterRecipe, navigate])

  const handleDelete = () => {
    const updateList = recipes.filter((eachRecipe) => String(eachRecipe.id) !== idRecipe)
    setRecipes(updateList)
    
  }

 if(!filterRecipe) {
  return null
 }

  return (
    <div id="details">
      <h2>Receta</h2>
      <h3>Nombre: {filterRecipe.name}</h3>
      <h4>Calirías: {filterRecipe.calories}</h4>
      <img src={filterRecipe.image} alt={filterRecipe.name} width={400}/>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
}

export default ItemDetails;
