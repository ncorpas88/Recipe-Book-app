import { useParams } from "react-router-dom";
import allRecipes from "../data/recetas.json"

function ItemDetails() {

    const params = useParams()
    


    const filteredRecipe = allRecipes.find((eachRecipe) => {
        if(eachRecipe.id === params.idRecipe) {
            return true
        }
    })

    
  return (
    
    <div id="details">
      
      <h2>Receta</h2>

      <h4>Nombre:{filteredRecipe.name}</h4>
      <h5>Calorias:{filteredRecipe.calories}</h5>
      <img src={filteredRecipe.image} alt="image" width={200} />

    </div>
  );
}

export default ItemDetails;
