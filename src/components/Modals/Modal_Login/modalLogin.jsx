import React from 'react';
import { Link } from 'react-router-dom';
import './modalLogin.css';

const ModalLogin = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-Login-overlay">
            <div className="modal-Login-container">
                <div className="Contenido_Login">
                    <h2>Bienvenido a GenialAcademy</h2>
                    <img src='/src/assets/images/Login_Success_Icon.png' className='Login_Success_Image' />
                    <Link to="/home" className="Login_button" onClick={onClose}>
                    <div className='Login-link'>Ingresar</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin;
