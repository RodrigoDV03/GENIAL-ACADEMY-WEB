import React, { useEffect } from 'react';
import './modalExam.css';
import { useParams } from 'react-router-dom';

const ModalExam = ({isOpen, onClose }) => {
    if (!isOpen) return null;

    const params = useParams();
    const {uniId} = params;

    return (
        <div className="modal-overlay">
        <div className="modal-container">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="Contenido">
                <h1>Estructura de examen de admisión por área de {uniId}</h1>
                <div className="img"></div>
            </div>
        </div>
    </div>
    )
}

export default ModalExam;
