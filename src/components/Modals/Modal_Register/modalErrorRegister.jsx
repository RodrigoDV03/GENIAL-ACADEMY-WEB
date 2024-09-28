import React from "react";
import "./modalRegister.css";

const ModalErrorRegister = ({ isOpen, onClose, errorMessage }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-Register-overlay">
            <div className="modal-Register-container">
                <div className="Contenido_Register">
                    <h2>Error de Inicio de Sesión</h2>
                    <p>{errorMessage}</p>
                    <button onClick={onClose} className="Register_button">Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalErrorRegister;