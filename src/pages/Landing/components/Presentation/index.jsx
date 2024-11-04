
import "./styles.css";

export const PresentationSection = () => {
  return (
    <div className="screen">
      <div className="p_container">
        <div className="p_box">
          <p className="p_title box_item">Plataforma para preuniversitarios</p>
          <p className="p_welcome box_item">BIENVENIDO A GENIALACADEMY</p>
          <p className="p_desc box_item">
            Aquí, cultivamos tu genio para que alcances nuevas alturas
            académicas. Tu viaje hacia el éxito universitario comienza ahora.
            ¡Estamos emocionados de ser parte de tu trayectoria educativa!
          </p>
          <button className="p_button">Ver tutorial</button>
        </div>
      </div>
      <div className="bg_container">
        <img
          className="bg_img"
          src="src/assets/images/presentation_bg.png"
          alt=""
        />
      </div>
    </div>
  );
};
