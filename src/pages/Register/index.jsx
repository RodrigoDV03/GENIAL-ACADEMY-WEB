import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stylesRegister.css";
import ModalRegister from "../../components/Modals/Modal_Register/modalRegister";

export const Register = () => {
    const [formValues, setFormValues] = useState({name: "", lastname: "", username: "", email: "", password: ""});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formValues.username !== "admin" && formValues.email !== "admin@gmail.com") {
            setIsSubmit(true);
            setFormError("");
        } else {
            setFormError("Ya existe un usuario con estas credenciales");
            setIsSubmit(false);
        }              
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="register__container">
            <div className="register__image"></div>
            <div className="register__wrapper">
                <div className="register__form__box">
                    { isSubmit && 
                    (
                        <ModalRegister isOpen={isSubmit} onClose={() => setIsSubmit(false)} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Regístrate</h2>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre:</div> 
                            <input 
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Apellido:</div> 
                            <input
                                type="text"
                                name="lastname"
                                value={formValues.lastname} onChange={handleChange}
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre de Usuario:</div> 
                            <input
                                type="text"
                                name="username"
                                value={formValues.username} onChange={handleChange}
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Correo electrónico:</div> 
                            <input
                                type="email"
                                name="email"
                                value={formValues.email} onChange={handleChange}
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Contraseña:</div> 
                            <div className="register__password__input__container">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    value={formValues.password} 
                                    onChange={handleChange} 
                                />                 
                                <button type="button" className="register__toggle__password" onClick={toggleShowPassword}>
                                    {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                </button>
                            </div>
                        </div>
                        {formError && (
                            <p className="register__error-message">{formError}
                            </p>
                        )}

                        <button type="submit" className="register__Button">
                            Regístrate
                        </button>        

                        <div className="login__link">
                            <p>¿Ya tienes una cuenta? <Link to="/">Inicia Sesión</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
