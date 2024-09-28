import React from "react";
import "./modalLogin.css";

const ModalErrorLogin = ({ isOpen, onClose, errorMessage }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-Login-overlay">
            <div className="modal-Login-container">
                <div className="Contenido_Login">
                    <h2>Error de Inicio de Sesión</h2>
                    <p>{errorMessage}</p>
                    <button onClick={onClose} className="Login_button">Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalErrorLogin;
