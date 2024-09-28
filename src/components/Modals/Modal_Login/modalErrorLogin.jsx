import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './modalLogin.css';

const ModalErrorLogin = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-Login-overlay">
        <div className="modal-Login-container">
            <div className="Contenido_Login">
                <h1>Usuario o Contraseña incorrectos</h1>
                <Link to="/login" className="Login_button" onClick={onClose}>
                    <div className='Login-link'>Ok</div>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default ModalErrorLogin;
