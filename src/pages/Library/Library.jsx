import React from "react";
import "./Library.css";

const Library = () => {
  const librosColecciones = {
    coleccionEsencial: [
      {
        id: 1,
        titulo: "Fundamentos de Álgebra",
        descripcion:
          "Introducción a los conceptos clave del álgebra básica para estudiantes de secundaria.",
        autores: ["Carlos Rodríguez"],
        imagen: "/src/assets/images/coleccionable1.png",
      },
      {
        id: 2,
        titulo: "Cálculo para Principiantes",
        descripcion:
          "Un enfoque accesible al cálculo diferencial e integral para estudiantes de nivel secundario.",
        autores: ["Ana Pérez"],
        imagen: "/src/assets/images/coleccion2.png",
      },
      {
        id: 3,
        titulo: "Física para Todos",
        descripcion:
          "Exploración de los principios fundamentales de la física, con énfasis en ejemplos prácticos.",
        autores: ["Luis Gómez"],
        imagen: "/src/assets/images/coleccion3.png",
      },
      {
        id: 4,
        titulo: "Química General",
        descripcion:
          "Teoría y práctica básica sobre la química general para estudiantes de secundaria.",
        autores: ["María Fernanda López"],
        imagen: "/src/assets/images/coleccion4.png",
      },
      {
        id: 5,
        titulo: "Geometría y Trigonometría",
        descripcion:
          "Conceptos esenciales sobre geometría plana y trigonometría para estudiantes de matemáticas.",
        autores: ["Fernando Díaz"],
        imagen: "/src/assets/images/coleccion5.png",
      },
      {
        id: 6,
        titulo: "Matemáticas Avanzadas",
        descripcion:
          "Desarrollo de temas avanzados en matemáticas, incluyendo cálculo y álgebra avanzada.",
        autores: ["Carlos Mendoza"],
        imagen: "/src/assets/images/coleccion6.png",
      },
      {
        id: 7,
        titulo: "Introducción a la Biología",
        descripcion:
          "Fundamentos de biología celular y genética para estudiantes de educación secundaria.",
        autores: ["Sofía Ramírez"],
        imagen: "/src/assets/images/coleccion7.png",
      },
      {
        id: 8,
        titulo: "Literatura Clásica",
        descripcion:
          "Estudio de los textos literarios fundamentales de la antigüedad y el Renacimiento.",
        autores: ["Juan Pérez"],
        imagen: "/src/assets/images/coleccion8.png",
      },
    ],

    cienciasHumanidades: [
      {
        id: 9,
        titulo: "Introducción a la Filosofía",
        descripcion:
          "Exploración de las corrientes filosóficas más influyentes y su impacto en la sociedad moderna.",
        autores: ["Jorge Hernández"],
        imagen: "/src/assets/images/humanidades1.png",
      },
      {
        id: 10,
        titulo: "Historia de la Civilización",
        descripcion:
          "Un recorrido por los eventos más importantes de la historia universal desde la prehistoria hasta el presente.",
        autores: ["María José Fernández"],
        imagen: "/src/assets/images/humanidades2.png",
      },
      {
        id: 12,
        titulo: "Sociología Contemporánea",
        descripcion:
          "Estudio de las teorías sociológicas y su relevancia en la sociedad actual.",
        autores: ["Carlos Ramírez"],
        imagen: "/src/assets/images/humanidades4.png",
      },
      {
        id: 13,
        titulo: "Historia del Arte",
        descripcion:
          "Un análisis de los movimientos artísticos más relevantes a lo largo de la historia.",
        autores: ["Patricia Jiménez"],
        imagen: "/src/assets/images/humanidades5.png",
      },
      {
        id: 14,
        titulo: "Literatura Contemporánea",
        descripcion:
          "Estudio de los autores y movimientos literarios que definieron la literatura del siglo XX.",
        autores: ["Luis Rodríguez"],
        imagen: "/src/assets/images/humanidades6.png",
      },
      {
        id: 15,
        titulo: "Teoría Política",
        descripcion:
          "Análisis de las teorías políticas más influyentes y su aplicación en la política actual.",
        autores: ["José Luis Castro"],
        imagen: "/src/assets/images/humanidades7.png",
      },
    ],

    temasSelectos: [
      {
        id: 16,
        titulo: "Matemáticas Avanzadas",
        descripcion:
          "Exploración en profundidad de temas como álgebra avanzada, cálculo y teoría de números.",
        autores: ["José Pérez"],
        imagen: "/src/assets/images/selecto1.png",
      },
      {
        id: 17,
        titulo: "Física Cuántica",
        descripcion:
          "Una introducción a la física cuántica y sus aplicaciones en el mundo moderno.",
        autores: ["Carlos López"],
        imagen: "/src/assets/images/selecto2.png",
      },
      {
        id: 18,
        titulo: "Biología Molecular",
        descripcion:
          "Estudio detallado de la biología a nivel molecular y su impacto en la medicina y la biotecnología.",
        autores: ["Isabel García"],
        imagen: "/src/assets/images/selecto3.png",
      },
      {
        id: 19,
        titulo: "Teoría de la Probabilidad",
        descripcion:
          "Una explicación detallada sobre los fundamentos y aplicaciones de la probabilidad en diversas áreas.",
        autores: ["Roberto Sánchez"],
        imagen: "/src/assets/images/selecto4.png",
      },
      {
        id: 20,
        titulo: "Estructuras de Datos Avanzadas",
        descripcion:
          "Un enfoque profundo sobre las estructuras de datos más avanzadas y sus aplicaciones.",
        autores: ["Sergio Martínez"],
        imagen: "/src/assets/images/selecto5.png",
      },
      {
        id: 21,
        titulo: "Programación en Python",
        descripcion:
          "Guía avanzada para dominar la programación en Python y sus aplicaciones en el análisis de datos.",
        autores: ["Verónica Díaz"],
        imagen: "/src/assets/images/selecto6.png",
      },
      {
        id: 22,
        titulo: "Diseño Gráfico y UX/UI",
        descripcion:
          "Exploración de principios clave del diseño gráfico enfocado en la experiencia del usuario.",
        autores: ["Alfredo Ruiz"],
        imagen: "/src/assets/images/selecto7.png",
      },
      {
        id: 23,
        titulo: "Redes Neuronales y Aprendizaje Automático",
        descripcion:
          "Un análisis detallado de las redes neuronales y su relación con el aprendizaje automático en la inteligencia artificial.",
        autores: ["Marta López"],
        imagen: "/src/assets/images/selecto8.png",
      },
    ],
  };

  return (
    <div>
      <main className="libraryMain">
        <section id="banner">
          <div className="banner">
            <div className="banner__texts">
              <h1 className="banner__title">
                Bienvenido a la biblioteca virtual
              </h1>
              <p className="banner__paragraph">
                Aquí, cada página es una puerta a la sabiduría, y cada clic
                expande tus horizontes académicos. Explora, descubre y sumérgete
                en un océano de conocimiento digital. ¡Que tus horas de estudio
                estén llenas de inspiración y aprendizaje!
              </p>
            </div>
            <div className="banner__imagen">
              <img src="/src/assets/images/bannerBiblio.png" alt="Biblioteca" />
            </div>
          </div>
        </section>
        <section id="steps">
          <h2 className="steps__title">
            Pasos Sencillos para Descargar Libros
          </h2>
          <div className="steps">
            <div className="step__list">
              <div className="list__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img
                  src="/src/assets/images/paso1.png"
                  className="number__img"
                  alt=""
                />
              </div>
              <div className="list__texts">
                <h3>01</h3>
                <p>Navega y elige el libro que despierte tu interés.</p>
              </div>
            </div>
            <div className="step__list">
              <div className="list__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img
                  src="/src/assets/images/paso2.png"
                  className="number__img"
                  alt=""
                />
              </div>
              <div className="list__texts">
                <h3>02</h3>
                <p>
                  Al hacer clic, obtén una breve descripción del contenido del
                  libro.
                </p>
              </div>
            </div>
            <div className="step__list">
              <div className="list__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img
                  src="/src/assets/images/paso3.png"
                  className="number__img"
                  alt=""
                />
              </div>
              <div className="list__texts">
                <h3>03</h3>
                <p>
                  Encuentra el botón de descarga y dale clic para iniciar la
                  descarga., la ventana mostrará el progreso de descarga para
                  mantenerte informado.
                </p>
              </div>
            </div>
            <div className="step__list">
              <div className="list__images">
                <img src="/src/assets/images/circulo.jpg" alt="" />
                <img
                  src="/src/assets/images/paso4.png"
                  className="number__img"
                  alt=""
                />
              </div>
              <div className="list__texts">
                <h3>04</h3>
                <p>
                  Una vez completada la descarga, tu libro estará listo para ser
                  explorado.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="books">
          <div className="essential">
            <h2>Colección esencial</h2>
            <div className="books__essential">
              {librosColecciones.coleccionEsencial.map((book) => (
                <div className="book__essential" key={book.id}>
                  <img src={book.imagen} alt={book.titulo} />
                </div>
              ))}
            </div>
          </div>
          <div className="sciences">
            <h2>Ciencias y humanidades</h2>
            <div className="books__sciences">
              {
                librosColecciones.cienciasHumanidades.map((book) => {
                    return (
                        <div className="book__science" key={book.id}>
                            <img src={book.imagen} alt={book.titulo} />
                        </div>
                    )
                })
              }
            </div>
          </div>
          <div className="select">
            <h2>Temas selectos</h2>
            <div className="books__select">
              {
                librosColecciones.temasSelectos.map((book) => {
                    return (
                        <div className="book__select" key={book.id}>
                            <img src={book.imagen} alt={book.titulo} />
                        </div>
                    )
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Library;
