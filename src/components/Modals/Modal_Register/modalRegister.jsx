import React from 'react';
import { Link } from 'react-router-dom';
import './modalRegister.css';

const ModalRegister = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-Register-overlay">
            <div className="modal-Register-container">
                <div className="Contenido_Register">
                    <h1>{message}</h1>
                    <img
                        src="/src/assets/images/Register_Success_Icon.png"
                        alt="Register_Success_Icon"
                        className="Register_Success_Image"
                    />
                    <Link to="/" className="Register_button" onClick={onClose}>
                        <div className="Register-link">Ingresar</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModalRegister;