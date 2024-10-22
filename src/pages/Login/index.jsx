import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import ModalLogin from "../../components/Modals/Modal_Login/modalLogin";
import ModalErrorLogin from "../../components/Modals/Modal_Login/modalErrorLogin";
import "./stylesLogin.css";

export const Login = () => {
    const [formValues, setFormValues] = useState({username: "", password: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formValues));
    };

    useEffect(() => {
        if (isAuthenticated) {
            setIsModalOpen(true);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (error) {
            setIsErrorModalOpen(true);
        }
    }, [error]);

    return (
        <div className="login__container">
            <div className="login__wrapper">
                <div className="login__form__box">
                    {isModalOpen && (<ModalLogin isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>)} 
                    {isErrorModalOpen && (<ModalErrorLogin isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)} errorMessage={error} />)}
                    <div className="login__titles">
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Iniciar Sesión</h2>
                    </div>
                    <form className="login__form" onSubmit={handleSubmit}>
                        <div className="login__input__box">
                            <div className="login__input__title">Nombre de usuario:</div>
                            <input type="text" name="username" value={formValues.username} onChange= 
                            {handleChange} required />
                        </div>
                        <div className="login__input__box">
                            <div className="login__input__title">Contraseña:</div>
                            <input type="password" name="password" value={formValues.password} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="login__Button" disabled={isLoading}>
                            {isLoading ? "Cargando..." : "Iniciar Sesión"}
                        </button>
                        <div className="register__link">
                            <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
