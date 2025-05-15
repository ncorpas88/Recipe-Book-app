import logoNvbar from "../image/logobook.png";
import './Navbar.css';

function Navbar() {
  return (
    <section id="navbar">
      <div id="navbar-content">
        <div id="title">
          <h1>Recetas Michelin</h1>
        </div>
        <div id="logo">
          <img src={logoNvbar} alt="logo" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
