import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stylesLogin.css";
import ModalLogin from "../../components/Modals/Modal_Login/modalLogin";

export const Login = () => {
    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.username === "admin" && formValues.password === "admin123") {
            setIsSubmit(true);
            setFormError("");
        } else {
            setFormError("Credenciales incorrectas. Inténtalo de nuevo.");
            setIsSubmit(false);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login__container">
            <div className="login__wrapper">
                <div className="login__form__box">
                    {isSubmit && (
                        <ModalLogin isOpen={isSubmit} onClose={() => setIsSubmit(false)} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Inicia Sesión</h2>
                        <div className="login__input__box">
                            <div className="login__input__title">Nombre de Usuario:</div>
                            <input 
                                type="text" 
                                name="username" 
                                value={formValues.username} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="login__input__box">
                            <div className="login__input__title">Contraseña:</div>
                            <div className="login__password__input__container">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    value={formValues.password} 
                                    onChange={handleChange} 
                                />
                                <button 
                                    type="button" 
                                    className="login__toggle__password" 
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                </button>
                            </div>
                        </div>
                        {formError && (
                            <p className="login__error-message">
                                {formError}
                            </p>
                        )}
                        <button type="submit" className="login__Button">
                            Ingresar
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