
import "./styles.css";

export const FunctionSection = () => {
  return (
    <div className="f_screen">
      <div className="sponsor_section">
        <div className="sponsor_item">
          <img src="/src/assets/images/saco olivero 1.png" alt="" />
        </div>
        <div className="sponsor_item">
          <img src="/src/assets/images/aduni 1.png" alt="" />
        </div>
        <div className="sponsor_item">
          <img src="/src/assets/images/trilce 1.png" alt="" />
        </div>
        <div className="sponsor_item">
          <img src="/src/assets/images/aula20 1.png" alt="" />
        </div>
      </div>
      <div className="f_content">
        <div className="f_colum_1">
          <div className="f_title">
            <p>GenialAcademy en acción: Descubre lo que puede hacer por ti</p>
          </div>
          <div className="f_img">
            <img src="/src/assets/images/functions_young_girl.png" alt="" />
          </div>
        </div>
        <div className="f_colum_2">
          <div className="f_card">
            <div className="f_card_row_1">
              <div className="f_card_icon  color_yellow">
                <img src="" alt="" />
              </div>
              <div className="f_card_title">
                Simulaciones de exámenes interactivos
              </div>
            </div>
            <div className="f_card_row_2">
              <div className="f_card_desc">
                Ofrecer una experiencia realista de los exámenes de admisión con
                simulaciones interactivas.
              </div>
            </div>
          </div>

          <div className="f_card">
            <div className="f_card_row_1">
              <div className="f_card_icon color_gray">
                <img src="" alt="" />
              </div>
              <div className="f_card_title">
                Personalización de horarios de estudio
              </div>
            </div>
            <div className="f_card_row_2">
              <div className="f_card_desc">
                Permitir a los estudiantes personalizar sus horarios de estudio.
              </div>
            </div>
          </div>

          <div className="f_card">
            <div className="f_card_row_1">
              <div className="f_card_icon color_lila">
                <img src="" alt="" />
              </div>
              <div className="f_card_title">
                Preguntas niveladas por dificultad
              </div>
            </div>
            <div className="f_card_row_2">
              <div className="f_card_desc">
                Proporcionar preguntas adaptativas en diferentes niveles de
                dificultad básico, intermedio y avanzado.
              </div>
            </div>
          </div>

          <div className="f_card">
            <div className="f_card_row_1">
              <div className="f_card_icon color_red">
                <img src="" alt="" />
              </div>
              <div className="f_card_title">
                Biblioteca virtual de recurso educativos
              </div>
            </div>
            <div className="f_card_row_2">
              <div className="f_card_desc">
                Incluir una biblioteca virtual con resúmenes, libros y
                materiales de estudio para complementar la preparación.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
