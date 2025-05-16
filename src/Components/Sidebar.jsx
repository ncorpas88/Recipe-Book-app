import buttonMenu from "../image/menuu.png";
import { Link } from "react-router-dom";

function Sidebard() {
  return (
    <section id="contenedor">
      <div id="button-conten">
        <div id="recetario">
          <h2>Recetario</h2>
        </div>
        <button id="button">
          <Link to="/">
            <img src={buttonMenu} alt="logo-button" />
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Sidebard;
