import logoNvbar from "../image/logobook.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section id="navbar">
      <div id="navbar-content">
        <div id="title">
          <h1>Recetas Favoritas</h1>
        </div>
        <div id="logo">
          <Link to="/">
            <img src={logoNvbar} alt="logo" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}

export default Navbar;
