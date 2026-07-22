import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="nav-logo-text">
            AUTO<span>MOTRIZ</span>
            <br />
            <span
              style={{
                fontSize: "0.7em",
                letterSpacing: "4px",
                color: "var(--gold)",
              }}
            >
              MERIZALDE
            </span>
          </div>
        </Link>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="nav-links">

          <li>
            <a href="/#servicios">Servicios</a>
          </li>

          <li>
            <Link to="/productos">Productos</Link>
          </li>

          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>

          <li>
            <Link to="/contacto" className="nav-cta">
              Contacto
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;