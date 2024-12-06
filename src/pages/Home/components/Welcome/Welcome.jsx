import React from "react";
import { useSelector } from "react-redux";
import "./Welcome.css";

const Welcome = () => {
  const username = useSelector((state) => state.auth.user?.names);
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Hola {username}</h1>
        <p className="welcome-paragraph">
          Estamos emocionados de tenerte aquí. Este es tu espacio personal donde
          puedes monitorear tu progreso académico, interactuar con tus materias
          y ganar recompensas por tus logros.
        </p>
      </div>
      <div className="welcome-image">
        <img src="/src/assets/images/footer.png" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
