import buttonMenu from "../image/menuu.png";
import { Link } from "react-router-dom";

function Sidebard() {
  return (
    <section id="contenedor">
      <div id="button-conten">
        <div id="recetario">
          <h2>Recetario</h2>
        </div>
        <ul>
          <li>
              <Link to="/">
                Menú principal
              </Link>
          </li>
          <li>
            <Link to="/recipeList">Lista Recetas</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebard;
