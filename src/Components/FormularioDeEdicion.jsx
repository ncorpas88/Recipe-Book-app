import { useState } from "react"
import './Formulario.css'

function ActualizarForm({ recipes, setRecipes }) {
    
  const [selectedId, setSelectedId] = useState(recipes[0]?.id || "")
  const [recipeName, setRecipeName] = useState("")
  const [recipeCalories, setRecipeCalories] = useState("")
  const [recipeImage, setRecipeImage] = useState("")
  const [recipeServings, setRecipeServings] = useState("")

  function handleSumit(event) {
    event.preventDefault()
    const updatedRecipe = {
      id: selectedId,
      name: recipeName,
      calories: Number(recipeCalories),
      image: recipeImage,
      servings: Number(recipeServings)
    }
    const others = recipes.filter(r => r.id !== selectedId)
    setRecipes([...others, updatedRecipe])
    setRecipeName("")
    setRecipeCalories("")
    setRecipeImage("")
    setRecipeServings("")
  }

  function handleSelect(event) {
    const id = event.target.value
    setSelectedId(id)
    const sel = recipes.find(r => r.id === id)
    if (sel) {
      setRecipeName(sel.name)
      setRecipeCalories(sel.calories.toString())
      setRecipeImage(sel.image)
      setRecipeServings(sel.servings.toString())
    }
  }

  return (
    <div className='formulario'>
      <form onSubmit={handleSumit}>
        <span>Actualizar Receta</span>
        <div>
          <label>
            Seleccionar Receta
            <select name="recipeSelect" value={selectedId} onChange={handleSelect}>
              {recipes.map(r => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Nombre Receta
            <input name="recipeName" type="text" placeholder="Nombre Receta" value={recipeName} onChange={e => setRecipeName(e.target.value)} required />
          </label>
          <br />
          <label>
            Calorías
            <input name="recipeCalories" type="text" placeholder="Calorías Receta" value={recipeCalories} onChange={e => setRecipeCalories(e.target.value)} required />
          </label>
          <br />
          <label>
            Imagen Plato
            <input name="recipeImage" type="url" placeholder="Imagen Plato" value={recipeImage} onChange={e => setRecipeImage(e.target.value)} required />
          </label>
          <br />
          <label>
            Porciones
            <input name="recipeServings" type="text" placeholder="Porciones Receta" value={recipeServings} onChange={e => setRecipeServings(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Actualizar Receta</button>
        </div>
      </form>
    </div>
  )
}

export default ActualizarForm