import { Link } from "react-router-dom";

function Sidebard() {
  return (
    <section id="contenedor">
      <div id="button-conten">
        <div id="recetario">
          <ul id="listasider">
            <li id="link1">
              <Link to="/">Menú principal</Link>
            </li>
            <br />
            <li>
              <Link to="/recipeList">Lista Recetas</Link>
            </li>
            <br />
            <li>
              <div>
                <Link to="/aboutUs">AboutUs</Link>
              </div>
            </li>
            <br />
            <li>
              <div>
                <Link to="/editRecipe">Editor Recetas</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sidebard;
