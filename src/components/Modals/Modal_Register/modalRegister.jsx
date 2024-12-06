import React from "react";

const ModalRegister = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-Register-overlay">
        <div className="modal-Register-container">
          <div className="Contenido_Register">
            <h1>{message}</h1>
            <img
              alt="Register_Success_Icon"
              className="Register_Success_Image"
              src="/src/assets/images/Register_Success_Icon.png"
            />
            <a className="Register_button" href="/" onClick={onClose}>
              <div className="Register-link">Ingresar</div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalRegister;  