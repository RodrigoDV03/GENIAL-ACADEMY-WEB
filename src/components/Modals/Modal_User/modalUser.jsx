import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/features/auth/authSlice'; // Ajusta la ruta si es necesario
import './modalUser.css';

const ModalUser = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Para redirigir al usuario después de cerrar sesión

    const username = localStorage.getItem("username");
    if (!isOpen) return null;

    const handleLogout = () => {
        dispatch(logoutUser()); // Limpia el estado de Redux y localStorage
        navigate('/'); // Redirige al usuario a la página de inicio
    };

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
                            <button onClick={handleLogout} className="menu-button">
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ModalUser;
