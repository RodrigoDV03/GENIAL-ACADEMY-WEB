import React from "react";
import './Steps.css'
const Steps = () => {
  const stepData = [
    {
      id: 1,
      title: "01",
      img: "/src/assets/images/list1.png",
      description:
        " Primero debes de seleccionar una área al cual vas a postular.",
    },
    {
      id: 2,
      title: "02",
      img: "/src/assets/images/list2.png",
      description:
        "Después, se abrirá una nueva ventana con secciones dedicadas a preguntas por curso y exámenes de admisión.",
    },
    {
      id: 3,
      title: "03",
      img: "/src/assets/images/list3.png",
      description:
        " Haz clic en la sección de preguntas por curso para acceder a un conjunto diverso de recursos, incluyendo preguntas, resúmenes y libros.",
    },
    {
      id: 4,
      title: "04",
      img: "/src/assets/images/list4.png",
      description:
        " Una vez dentro, podrás elegir un curso específico y explorar detalladamente las preguntas, resúmenes y libros relacionados con ese tema en particular.",
    },
  ];

  return (
    <div>
      <section className="main-steps">
        <h1>¿Cómo acceder al material de estudio?</h1>
        <div className="steps">
          {stepData.map((step) => {
            return (
              <div className="steps-number" key={step.id}>
                <div className="number-images">
                  <img src="/src/assets/images/circulo.jpg" alt="" />
                  <img
                    src={step.img}
                    className="number-img"
                    alt={step.description}
                  />
                </div>
                <div className="number-text">
                  <h3>{step.title}</h3>
                  <p>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Steps;
