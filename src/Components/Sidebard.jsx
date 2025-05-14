import buttonMenu from "../image/menuu.png";

function Sidebard() {
  return (
    <section id="contenedor">
      <div id="button-conten">
        <div id="recetario">
          <h2>Recetario</h2>
        </div>
        <button id="button">
          <img src={buttonMenu} alt="logo-button" />
        </button>
      </div>
    </section>
  );
}

export default Sidebard;
