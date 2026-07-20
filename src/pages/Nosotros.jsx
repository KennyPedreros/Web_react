import { Link } from "react-router-dom";
import video from "../assets/video.mp4";

function Nosotros() {
  return (
    <section id="nosotros">
      <div className="nosotros-inner">

        <div className="nosotros-text">

          <span className="section-tag">
            ✦ Nuestra historia
          </span>

          <h2 className="section-title">
            ¿QUIÉNES
            <br />
            SOMOS?
          </h2>

          <div className="section-line"></div>

          <p>
            Automotriz Merizalde es un taller mecánico ubicado en la ciudad de
            Machala, provincia de El Oro, Ecuador, con trayectoria y experiencia
            comprobada en el área automotriz.
          </p>

          <p>
            Nos distingue la atención personalizada, la honestidad con el cliente
            y la calidad en cada trabajo que realizamos. Cada vehículo que entra
            a nuestro taller recibe un diagnóstico preciso y una solución
            confiable.
          </p>

          <p>
            Nuestro gerente propietario atiende directamente a cada cliente,
            garantizando transparencia y profesionalismo en cada servicio.
          </p>

          <Link
            to="/contacto"
            className="btn-primary"
            style={{
              marginTop: "8px",
              display: "inline-block",
            }}
          >
            Agendar Cita
          </Link>

        </div>

        <div className="owner-card">

          <video
            src={video}
            autoPlay
            muted
            loop
            width="100%"
            height="100%"
          />

        </div>

      </div>
    </section>
  );
}

export default Nosotros;