import { Link } from "react-router-dom";
import "./NavBarL.css";

export const NavBarL = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <Link to={"/home"} className="logo_container">
        <img src="/src/assets/images/GENIALACADEMY_LOGO.png" alt="" />
      </Link>
      <nav className="nav_container">
        <ul className="nav">
          <li className="header__nav__item">
            <Link to="#" className="nav_link">
              Inicio
            </Link>
          </li>
          <li className="header__nav__item">
            <button
              className="nav_link"
              onClick={() => scrollToSection("universidades")}
            >
              Universidades
            </button>
          </li>
          <li className="header__nav__item">
            <button
              className="nav_link"
              onClick={() => scrollToSection("tutorial")}
            >
              Tutorial
            </button>
          </li>
          <li className="header__nav__item">
            <button
              className="nav_link"
              onClick={() => scrollToSection("preguntas")}
            >
              Preguntas Frecuentes
            </button>
          </li>
        </ul>
      </nav>
      <div className="buttons-container">
        <Link to={"/register"} className="button-register">
          <button>Registrarse</button>
        </Link>
        <Link to={"/login"} className="button-login">
          <button>Iniciar sesión</button>
        </Link>
      </div>
    </header>
  );
};
