import React from 'react'
import { useState } from "react";
import ModalUser from "../Modals/Modal_User/modalUser";

import './NavBar.css'

const NavBar = () => {
  const username = localStorage.getItem("username");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="navBar-container">
        <div className="user-welcome">
            <h1>Bienvenido {username} </h1>
            <div className="user-background">
                <img src="/src/assets/images/userMenu.png" alt="User" onClick={handleOpenModal} className="open-modal-button"/>
            </div>
            <ModalUser isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    </div>
  )
}

export default NavBar
