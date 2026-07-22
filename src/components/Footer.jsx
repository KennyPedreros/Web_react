import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-inner">

          <div className="footer-brand">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div style={{ fontSize: "1.6rem" }}>🔧</div>

              <div
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "1.5rem",
                  letterSpacing: "2px",
                  color: "var(--white)",
                }}
              >
                AUTOMOTRIZ <span style={{ color: "var(--gold)" }}>MERIZALDE</span>
              </div>
            </div>

            <p>
              Tu taller de confianza en Machala, El Oro.
              Calidad, honestidad y profesionalismo en cada servicio.
            </p>

          </div>

          <div className="footer-links">

            <h4>Servicios</h4>

            <ul>
              <li><Link to="/servicios">Cambio de Aceite</Link></li>
              <li><Link to="/servicios">Reparación de Motores</Link></li>
              <li><Link to="/servicios">Cajas de Cambio</Link></li>
              <li><Link to="/servicios">Suspensiones</Link></li>
              <li><Link to="/servicios">Scáner Inyectores</Link></li>
              <li><Link to="/servicios">Mecánica General</Link></li>
              <li><Link to="/servicios">Asistencia Mecánica</Link></li>
              <li><Link to="/servicios">Servicio de Grúa 24/7</Link></li>
            </ul>

          </div>

          <div className="footer-links">

            <h4>Contacto</h4>

            <ul>
              <li>
                <a href="tel:+593988903605">
                  📞 0988 903 605
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/593988903605"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </li>

              <li>
                <Link to="/contacto">
                  📍 Machala, El Oro
                </Link>
              </li>
            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Automotriz Merizalde · Machala, El Oro,
            Ecuador · Todos los derechos reservados.
          </p>

          <p
            style={{
              color: "var(--gold)",
              fontSize: "0.75rem",
            }}
          >
            ✦ Hecho con dedicación para ti ✦
          </p>

        </div>
      </footer>

      <a
        href="https://wa.me/593988903605"
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Escríbenos por WhatsApp"
      >
        WhatsApp
      </a>
    </>
  );
}

export default Footer;