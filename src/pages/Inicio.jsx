function Inicio() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          Machala – El Oro, Ecuador
        </p>

        <h1 className="hero-title">
          AUTOMOTRIZ
          <br />
          <span className="gold">M & M</span>
        </h1>

        <p className="hero-subtitle">
          Especialistas en mecánica automotriz de alta calidad
        </p>

        <div className="hero-divider"></div>

        <p className="hero-desc">
          Más de años de experiencia brindando soluciones automotrices
          confiables. Tu vehículo en las mejores manos, con tecnología y
          dedicación.
        </p>

        <div className="hero-btns">
          <a href="#servicios" className="btn-primary">
            Ver Servicios
          </a>

          <a
            href="https://wa.me/593988903605"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;