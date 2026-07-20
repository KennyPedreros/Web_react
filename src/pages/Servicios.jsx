import grua from "../assets/grua.jpg";

function Servicios() {
  return (
    <section id="servicios">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span className="section-tag">✦ Lo que hacemos</span>

        <h2 className="section-title">
          NUESTROS
          <br />
          SERVICIOS
        </h2>

        <div className="section-line"></div>

        <div className="services-grid">

          <div className="service-card">
            <span className="service-icon">🛢️</span>
            <div className="service-name">Cambio de Aceite</div>
            <p className="service-desc">
              Cambio de aceite y filtros con productos de alta calidad para
              mantener tu motor en óptimas condiciones.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">⚙️</span>
            <div className="service-name">Reparación de Motores</div>
            <p className="service-desc">
              Diagnóstico y reparación completa de motores con garantía.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">🔩</span>
            <div className="service-name">Cajas de Cambio</div>
            <p className="service-desc">
              Revisión y mantenimiento de cajas manuales y automáticas.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">🚗</span>
            <div className="service-name">Suspensiones</div>
            <p className="service-desc">
              Diagnóstico y reparación del sistema de suspensión.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">💉</span>
            <div className="service-name">
              Scáner y Limpieza de Inyectores
            </div>
            <p className="service-desc">
              Limpieza y diagnóstico con equipos especializados.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">🔧</span>
            <div className="service-name">Mecánica General</div>
            <p className="service-desc">
              Soluciones para cualquier falla mecánica.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">🛠️</span>
            <div className="service-name">Asistencia Mecánica</div>

            <p className="service-desc">
              Atención inmediata para emergencias.
            </p>

            <button
              className="btn-primary"
              onClick={() =>
                window.open("https://wa.me/593988903605", "_blank")
              }
            >
              Necesitas ayuda?
            </button>
          </div>

          <div
            className="service-card"
            style={{
              gridColumn: "1 / -1",
              maxWidth: "420px",
            }}
          >
            <span className="service-icon">🚛</span>

            <div className="service-name">
              Servicio de Grúa 24/7
            </div>

            <p className="service-desc">
              Atención para emergencias y traslado de vehículos.
            </p>

            <img
              src={grua}
              alt="Grúa"
              style={{
                width: "100%",
                marginTop: "16px",
                borderRadius: "2px",
              }}
            />

            <button
              className="btn-primary"
              onClick={() =>
                window.open("https://wa.me/593988903605", "_blank")
              }
            >
              Necesitas ayuda?
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Servicios;
