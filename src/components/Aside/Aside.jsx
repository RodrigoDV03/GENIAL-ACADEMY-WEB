import './Aside.css';
import { IoBookOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { BsBackpack } from "react-icons/bs";
import { TbClockHour4 } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Aside = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="content-sidebar">
      <aside className="sidebar-layout">
        <div className="sidebar-header">
          <h1>GenialAcademy</h1>
        </div>
        <nav className="sidebar-content">
          <ul className="nav-list">
            <Link  to={'/home'} className="nav-item_link">
              <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>
                <GoHome className='item-icon' /> Inicio
              </li>
            </Link>
            <Link to={'/cursos'} className="nav-item_link">
              <li className={`nav-item ${activeLink === 'cursos' ? 'active' : ''}`} onClick={() => handleLinkClick('cursos')}>
                <BsBackpack className='item-icon' /> Cursos
              </li>
            </Link>
            <Link to={'/libros'} className="nav-item_link">
              <li className={`nav-item ${activeLink === 'libros' ? 'active' : ''}`} onClick={() => handleLinkClick('libros')}>
                <IoBookOutline className='item-icon' /> Libros
              </li>
            </Link>
           <Link to={'/list'} className="nav-item_link">
            <li className={`nav-item ${activeLink === 'list' ? 'active' : ''}`} onClick={() => handleLinkClick('list')}>
                <LuListTodo className='item-icon' /> To do list
              </li>
           </Link>
            <li className={`nav-item ${activeLink === 'pomodoro' ? 'active' : ''}`} onClick={() => handleLinkClick('pomodoro')}>
              <TbClockHour4 className='item-icon' /> Pomodoro
            </li>
            <li className={`nav-item ${activeLink === 'cerrar' ? 'active' : ''}`} onClick={() => handleLinkClick('cerrar')}>
              <FiLogOut className='item-icon' /> Cerrar sesión
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Aside;
