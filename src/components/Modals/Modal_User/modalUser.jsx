import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './modalUser.css';

const ModalUser = ({ isOpen, onClose }) => {
    const username = localStorage.getItem("username");
    if (!isOpen) return null;

    return (
    <div className="usermodal-overlay">
        <div className="usermodal-container">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="modal-header">
                <img src='/src/assets/images/userMenu.png' alt="User Avatar" className="avatar" />
                <h2>{username}</h2>
            </div>
            <div className="modal-first-content">
                <ul className="modal-menu">
                    <li className='modal-menu list'><a href="#profile"><i className="icon-profile"></i>Mi perfil</a></li>
                    <li className='modal-menu list'><Link to="/todolist"><i className="icon-todo"></i>To do list</Link></li>
                </ul>
            </div>
            <div className='modal-second-content'>
            <ul className="modal-menu">
                    <li>
                        <a href="#help">
                        <button className="menu-button">
                            Ayuda
                        </button>
                        </a>
                    </li>
                    <li>
                        <a href="#logout">
                            <Link to="/" className="menu-button">
                                Cerrar Sesión
                            </Link>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    );
};

export default ModalUser;
