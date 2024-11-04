
import "./styles.css";

export const MemberShipSection = () => {
  return (
    <div className="m_screen">
      <div className="m_title">
        <p>Elige tu plan</p>
      </div>
      <div className="m_container">
        <div className="m_card">
          <div className="m_card_title">
            <p>Gratis</p>
          </div>
          <div className="m_card_price">
            <p>s/0</p>
          </div>
          <div className="m_card_features">
            <p>✔ Simulaciones de exámenes de admisión</p>
            <p>✔ Preguntas niveladas básicas e intermedias</p>
            <p>✔ Personalización de horarios</p>
            <p>✔ Acceso a limitado a resumenes y materiales de estudio</p>
          </div>
        </div>

        <div className="m_card up">
          <div className="m_card_title">
            <p>Mensual</p>
          </div>
          <div className="m_card_price">
            <p>s/20</p>
          </div>
          <div className="m_card_features">
            <p>✔ Simulaciones ilimitadas</p>
            <p>✔ Preguntas niveladas básicas, intermedias y avanzadas</p>
            <p>✔ Acceso total a libros, resúmenes y materiales</p>
            <p>✔ Acceso ilimitado a resúmenes y materiales de estudio</p>
            <p>✔ Sin publicidad</p>
          </div>
          <button className="m_card_button">Suscribirse</button>
        </div>

        <div className="m_card">
          <div className="m_card_title">
            <p>Anual</p>
          </div>
          <div className="m_card_price">
            <p>s/200</p>
          </div>
          <div className="m_card_features">
            <p>✔ Todos los beneficios mensuales</p>
            <p>✔ Descuento anual</p>
            <p>✔ Informe avanzados sobre el progreso del estudiante</p>
          </div>
          <button className="m_card_button">Suscribirse</button>
        </div>
      </div>
    </div>
  );
};
