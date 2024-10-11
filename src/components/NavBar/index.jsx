import { Link } from "react-router-dom";
import { useState } from "react";
import ModalUser from "../Modals/Modal_User/modalUser";
import "./styles.css"

export const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = localStorage.getItem("username");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
        <Link to={"/home"} className="logo_container">
          <img src="/src/assets/images/GENIALACADEMY_LOGO.png" alt="" />
        </Link>
        <nav className="nav_container">
            <ul className="nav">
              <li className="header__nav__item">
                <Link to='/home' className="nav_link">
                  Inicio
                </Link>
              </li>

              <li className="header__nav__item dropdown">
            <span className="nav_link">
              Universidades
            </span>
              <ul className="dropdown_menu">
                <li><Link to=''>UNMSM</Link></li>
                <li><Link to=''>UNI</Link></li>
                <li><Link to=''>UNAC</Link></li>
                <li><Link to=''>UNAL</Link></li>
                <li><Link to=''>UNFV</Link></li>
                <li><Link to=''>UNTELS</Link></li>
                <li><Link to=''>UNSA</Link></li>
                <li><Link to=''>UNE</Link></li>
              </ul>
          </li>

              <li className="header__nav__item">
                <Link to="/todolist" className="nav_link">
                  To do list
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to='/library' className="nav_link">
                  Biblioteca Virtual
                </Link>
              </li>
            </ul>
        </nav>
        <div className="actions_container">
            <img src='/src/assets/images/userMenu.png' onClick={handleOpenModal} className="open-modal-button" alt=""/>
            <span>Bienvenido {username}</span>
        </div>
        <ModalUser isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};
