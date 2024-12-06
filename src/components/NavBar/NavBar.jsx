import React from "react";
import { useState } from "react";
import ModalUser from "../Modals/Modal_User/modalUser";
import { useSelector } from 'react-redux';

import './NavBar.css'
import { useScore } from '../../context/ScoreContext';

const NavBar = () => {
  // const username = localStorage.getItem("username");

  const user = useSelector((state) => state.auth.user);
  const [isModalOpen, setModalOpen] = useState(false);
  const { state } = useScore();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="navBar-container">
        <div className="user-welcome">
            <h1 className="welcome__navbar">Hola {user?.names} </h1>
            <div className="user-background">
                <img src="/src/assets/images/userMenu.png" alt="User" onClick={handleOpenModal} className="open-modal-button"/>
            </div>
            <ModalUser isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
        <div className="score-info">
            <span>Monedas: {user?.coins}</span>
        </div>
    </div>
  )
}

export default NavBar
