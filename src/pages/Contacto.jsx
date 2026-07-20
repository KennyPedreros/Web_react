function Contacto() {
  return (
    <section id="contacto">
      <div className="contact-inner">

        <div className="contact-info">

          <span className="section-tag">✦ Estamos aquí</span>

          <h2 className="section-title">
            CONTÁCTENOS
          </h2>

          <div className="section-line"></div>

          <div className="contact-item">
            <div className="contact-icon-wrap">📍</div>

            <div>
              <div className="contact-label">
                Dirección
              </div>

              <div className="contact-val">
                Machala, Provincia de El Oro
                <br />
                Ecuador
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrap">📱</div>

            <div>
              <div className="contact-label">
                Teléfono / WhatsApp
              </div>

              <div className="contact-val">
                <a href="tel:+593988903605">
                  0988 903 605
                </a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrap">⏰</div>

            <div>
              <div className="contact-label">
                Horario de Atención
              </div>

              <div className="contact-val">
                Lunes – Sábado
                <br />
                08:00 – 18:00
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrap">💳</div>

            <div>
              <div className="contact-label">
                Formas de Pago
              </div>

              <div className="contact-val">
                Efectivo · Transferencia
                <br />
                Tarjeta de crédito / débito
              </div>
            </div>
          </div>

        </div>

        <div className="contact-form">

          <h3>Envíanos un Mensaje</h3>

          <form>

            <div className="form-row">
              <label>Nombre completo</label>

              <input
                type="text"
                placeholder="Tu nombre"
                maxLength="100"
              />
            </div>

            <div className="form-row">
              <label>Teléfono</label>

              <input
                type="tel"
                placeholder="Tu número de contacto"
                maxLength="20"
              />
            </div>

            <div className="form-row">
              <label>Servicio requerido</label>

              <input
                type="text"
                placeholder="Ej: Cambio de aceite"
                maxLength="150"
              />
            </div>

            <div className="form-row">
              <label>Mensaje</label>

              <textarea
                placeholder="Cuéntanos sobre tu vehículo..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="form-submit"
            >
              Enviar por WhatsApp 📱
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contacto;