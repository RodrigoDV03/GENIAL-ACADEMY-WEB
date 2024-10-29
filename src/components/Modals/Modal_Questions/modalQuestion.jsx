import React from "react";
import "./modalQuestions.css";
import { Link, useParams } from "react-router-dom";

const ModalQuestions = ({ theme, isOpen, onClose }) => {
  if (!isOpen) return null;
  const params = useParams();
  const { uni_id, area_id, course_id } = params;

  return (
    <div className="modal-window-overlay">
      <div className="LevelContent">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h1>Preguntas de {theme.name}</h1>
        <div className="levelsContainer">
          <div className="level">
            <Link to={`${theme.id}/basic`}>
              <div className="level__image basic"></div>
            </Link>
            <div className="level__title">
              <p>Basico</p>
            </div>
          </div>
          <div className="level">
            <Link to={`${theme.id}/medium`}>
              <div className="level__image medium"></div>
            </Link>
            <div className="level__title">
              <p>Intermedio</p>
            </div>
          </div>
          <div className="level">
            <Link to={`${theme.id}/advanced`}>
              <div className="level__image advanced"></div>
            </Link>
            <div className="level__title">
              <p>Avanzado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQuestions;
