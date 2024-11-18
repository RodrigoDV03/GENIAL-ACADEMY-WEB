import { useState } from "react";
import "./styles.css";

export const FaqSection = () => {
    const [expandCollapseState,setExpandCollapseState] = useState([false, false, false, false])

    const expandCollapse = (index) => {
        const newExpandCollapseState = [...expandCollapseState];
        newExpandCollapseState[index] = !newExpandCollapseState[index];
        setExpandCollapseState(newExpandCollapseState)
    }
  
    const FAQ = [
      {
        question: "¿Cómo me registro en la plataforma?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        sint error accusantium ab, atque quidem illum illo, dolorum
        cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
        eveniet nobis necessitatibus sapiente!`
      },
      {
        question: "¿Qué planes tiene la plataforma?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        sint error accusantium ab, atque quidem illum illo, dolorum
        cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
        eveniet nobis necessitatibus sapiente!`
      },
      {
        question: "¿Qué funcionalidades ofrece?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        sint error accusantium ab, atque quidem illum illo, dolorum
        cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
        eveniet nobis necessitatibus sapiente!`
      },
      {
        question: "¿Obtengo algun premio si gano puntos?",
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        sint error accusantium ab, atque quidem illum illo, dolorum
        cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
        eveniet nobis necessitatibus sapiente!`
      },
    ]

    function faqTile(faq, index) {
      return (
        <div className="faq_tile">
          <div className="faq_tile_collapse">
            <div className="faq_tile_title">
              <p>{faq.question}</p>
            </div>
            <div className="faq_tile_trail" onClick={() => expandCollapse(index)}>
              <img src={expandCollapseState[index]? "src/assets/images/arrow_collapse.png": "src/assets/images/arrow_expanded.png"} alt="" />
            </div>
          </div>
          <div className="faq_tile_expanded">
            <p>{expandCollapseState[index]? faq.answer: ""}</p>
          </div>
        </div>
      );
    }

    function generateTiles() {
      const html = [];
      FAQ.forEach((faq, index) => {
        html.push(faqTile(faq, index))
      });
      return html;
    }

  return (
    <div className="faq_screen">
      <div id="preguntas" className="faq_title">Preguntas Frecuentes</div>
      <div className="faq_content">
        {generateTiles()}
      </div>
    </div>
  );
};
