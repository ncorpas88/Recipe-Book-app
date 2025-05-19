import logoNvbar from "../image/logobook.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section id="navbar">
      <div id="navbar-content">
        <div id="title">
          <h1>Recetas Michelin</h1>
        </div>
        <div id="logo">
          <Link to="/">
            <img src={logoNvbar} alt="logo" />
          </Link>
        </div>
        <div id="enlaceAbout">
          <Link to="/aboutUs">
            <h3>AboutUsS</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
