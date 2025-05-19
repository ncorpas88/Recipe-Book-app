import { useParams } from "react-router-dom";


function ItemDetails({recipes}) {

  const {idRecipe} = useParams()

  const filterRecipe = recipes.find((eachRecipe) => String(eachRecipe.id) === idRecipe)



  return (
    <div id="details">
      <h2>Receta</h2>
      <h3>Nombre: {filterRecipe.name}</h3>
      <h4>Calirías: {filterRecipe.calories}</h4>
      <img src={filterRecipe.image} alt={filterRecipe.name} width={400}/>
    </div>
  );
}

export default ItemDetails;
