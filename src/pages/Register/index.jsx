import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, clearState } from "../../redux/features/register/registerSlice";
import ModalRegister from "../../components/Modals/Modal_Register/modalRegister";
import ModalErrorRegister from "../../components/Modals/Modal_Register/modalErrorRegister";
import "./stylesRegister.css";

export const Register = () => {
    const [formValues, setFormValues] = useState({name:"", lastname:"", username:"",email: "", password: ""});
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { isLoading, error, isRegistered } = useSelector((state) => state.register || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(registerUser(formValues));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        console.log("isLoading:", isLoading);
        console.log("isRegistered:", isRegistered);
        console.log("error:", error);
    }, [isLoading, isRegistered, error]);

    return (
        <div className="register__container">
            <div className="register__image"></div>
            <div className="register__wrapper">
                <div className="register__form__box">
                    { isRegistered && 
                    (
                        <ModalRegister isOpen={isRegistered} onClose={() => dispatch(clearState())} />
                    )}
                    { error && 
                    (
                        <ModalErrorRegister isOpen={!!error} onClose={() => dispatch(clearState())} errorMessage={error} />
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
                        <button type="submit" className="register__Button" disabled={isLoading}>
                            {isLoading ? "Registrando..." : "Regístrate"}
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