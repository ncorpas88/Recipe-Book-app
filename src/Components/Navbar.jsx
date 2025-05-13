import logoNvbar from "../image/logobook.png";
import buttonMenu from "../image/menuu.png";

function Navbar() {
  return (
    <nav>
      <div>
        <button>
          <img src={buttonMenu} alt="logo-button" />
        </button>
      </div>
      <div>
        <h1>Recetas Michelin</h1>
      </div>
      <div>
        <img src={logoNvbar} alt="logo" />
      </div>
    </nav>
  );
}

export default Navbar;
