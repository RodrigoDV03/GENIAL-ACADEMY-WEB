import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Footer = () => { 
    return (
        <footer>
            <div className="row_1">
                <Link to={"/home"} className="logo">
                    <img src="/src/assets/images/GENIALACADEMY_LOGO.png" alt="" />
                </Link>
                <div className="footer_nav">
                    <a className="footer__nav__item" href="#">Política de privacidad</a>
                    <a className="footer__nav__item" href="#">Ayuda</a>
                    <a className="footer__nav__item" href="#">Acuerdo de suscripción</a>
                    <a className="footer__nav__item" href="#">Sobre nosotros</a>
                    <a className="footer__nav__item" href="#">Dispositivos compatibles</a>
                </div>
                <div className="social_container">
                    <button className="social_item">
                        <img src="/src/assets/images/facebook.png" />
                    </button>
                    <button className="social_item">
                        <img src="/src/assets/images/instagram.png" />
                    </button>
                    <button className="social_item">
                        <img src="/src/assets/images/twitter.png" />
                    </button>
                </div>
            </div>
            <div className="row_2">
                <p>@2024 GenialAcademy. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}