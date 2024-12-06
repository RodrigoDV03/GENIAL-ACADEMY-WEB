import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalRegister from "../../components/Modals/Modal_Register/modalRegister";
import "./stylesRegister.css";

export const Register = () => {
    const [formValues, setFormValues] = useState({
        names: "",
        surNames: "",
        username: "",
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [registerMessage, setRegisterMessage] = useState("");
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario.
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:3000/auth/signup", formValues, {
                headers: {
                    "x-api-key": "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
                    "Content-Type": "application/json",
                },
            });

            console.log("Respuesta de la API:", response.data);

            const userName = response.data.data.names;
            setRegisterMessage("¡Registro exitoso! Bienvenido, " + userName + ".");
            setShowRegisterModal(true);
        } catch (err) {
            console.error("Error de la API:", err.response?.data);
            setError(err.response?.data?.message || "Ocurrió un error inesperado.");
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setShowRegisterModal(false);
        setRegisterMessage("");
        setError(null);
        setFormValues({
            names: "",
            surNames: "",
            username: "",
            email: "",
            password: "",
        });
    };

    return (
        <div className="register__container">
            <div className="register__image"></div>
            <div className="register__wrapper">
                <div className="register__form__box">
                    {showRegisterModal && (
                        <ModalRegister
                            isOpen={showRegisterModal}
                            message={registerMessage}
                            onClose={closeModal}
                        />
                    )}
                    <div className="register__titles">
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Regístrate</h2>
                    </div>
                    <form className="register__form" onSubmit={handleSubmit}>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre:</div>
                            <input
                                type="text"
                                name="names"
                                value={formValues.names}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Apellido:</div>
                            <input
                                type="text"
                                name="surNames"
                                value={formValues.surNames}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre de usuario:</div>
                            <input
                                type="text"
                                name="username"
                                value={formValues.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Correo electrónico:</div>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Contraseña:</div>
                            <input
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="register__Button" disabled={isLoading}>
                            {isLoading ? "Registrando..." : "Regístrate"}
                        </button>
                        {error && <div className="register__error">{error}</div>}
                        <div className="login__link">
                            <p>
                                ¿Ya tienes una cuenta?{" "}
                                <Link to="/login" onClick={(e) => isLoading && e.preventDefault()}>
                                    Inicia sesión
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};