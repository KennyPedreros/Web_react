function Productos() {
  return (
    <section id="productos">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span className="section-tag">✦ Nuestros productos</span>

        <h2 className="section-title">
          LO QUE
          <br />
          OFRECEMOS
        </h2>

        <div className="section-line"></div>

        <div className="products-grid">
          <div className="product-card">
            <span className="product-icon">🛢️</span>
            <div className="product-name">Aceites de Motor</div>
            <p className="product-sub">
              Lubricantes sintéticos y minerales de marcas reconocidas.
            </p>
          </div>

          <div className="product-card">
            <span className="product-icon">🔦</span>
            <div className="product-name">Filtros Automotrices</div>
            <p className="product-sub">
              Filtros de aceite, aire y combustible para todo tipo de vehículos.
            </p>
          </div>

          <div className="product-card">
            <span className="product-icon">🧰</span>
            <div className="product-name">Repuestos y Piezas</div>
            <p className="product-sub">
              Repuestos originales y alternativos con garantía de calidad.
            </p>
          </div>

          <div className="product-card">
            <span className="product-icon">💧</span>
            <div className="product-name">Líquidos de Frenos</div>
            <p className="product-sub">
              Fluidos de freno y refrigerante para un óptimo funcionamiento.
            </p>
          </div>

          <div className="product-card">
            <span className="product-icon">🔋</span>
            <div className="product-name">Baterías</div>
            <p className="product-sub">
              Venta e instalación de baterías para todo tipo de vehículos.
            </p>
          </div>

          <div className="product-card">
            <span className="product-icon">💨</span>
            <div className="product-name">Amortiguadores</div>
            <p className="product-sub">
              Amortiguadores y piezas de suspensión de alta durabilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productos;