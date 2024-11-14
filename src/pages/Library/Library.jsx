import React from 'react';
import './Library.css'


const Library = () => {
  return (
    <div>
        <main className="libraryMain">
            <section id="banner">
                <div className="banner">
                    <div className="banner__texts">
                        <h1 className="banner__title">Bienvenido a la biblioteca virtual</h1>
                        <p className="banner__paragraph">Aquí, cada página es una puerta a la sabiduría, y cada clic expande tus horizontes académicos. Explora, descubre y sumérgete en un océano de conocimiento digital. ¡Que tus horas de estudio estén llenas de inspiración y aprendizaje!</p>
                    </div>
                    <div className="banner__imagen">
                        <img src='/src/assets/images/bannerBiblio.png' alt="Biblioteca" />
                    </div>
                </div>
            </section>
            <section id="steps">
                <h2 className="steps__title">Pasos Sencillos para Descargar Libros</h2>
                <div className="steps">
                    <div className="step__list">
                        <div className="list__images">
                            <img src='/src/assets/images/circulo.jpg' alt="" />
                            <img src='/src/assets/images/paso1.png' className="number__img" alt="" />
                        </div>
                        <div className="list__texts">
                            <h3>01</h3>
                            <p>Navega y elige el libro que despierte tu interés.</p>
                        </div>
                    </div>
                    <div className="step__list">
                        <div className="list__images">
                            <img src='/src/assets/images/circulo.jpg' alt="" />
                            <img src='/src/assets/images/paso2.png' className="number__img" alt="" />
                        </div>
                        <div className="list__texts">
                            <h3>02</h3>
                            <p>Al hacer clic, obtén una breve descripción del contenido del libro.</p>
                        </div>
                    </div>
                    <div className="step__list">
                        <div className="list__images">
                            <img src='/src/assets/images/circulo.jpg' alt="" />
                            <img src='/src/assets/images/paso3.png'className="number__img" alt="" />
                        </div>
                        <div className="list__texts">
                            <h3>03</h3>
                            <p>Encuentra el botón de descarga y dale clic para iniciar la descarga., la ventana mostrará el progreso de descarga para mantenerte informado.</p>
                        </div>
                    </div>
                    <div className="step__list">
                        <div className="list__images">
                            <img src='/src/assets/images/circulo.jpg' alt="" />
                            <img src='/src/assets/images/paso4.png' className="number__img" alt="" />
                        </div>
                        <div className="list__texts">
                            <h3>04</h3>
                            <p>Una vez completada la descarga, tu libro estará listo para ser explorado.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="books">
                <div className="essential">
                    <h2>Colección esencial</h2>
                    <div className="books__essential">
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccionable1.png' alt="" />
                        </div>
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccion2.png' alt="" />
                        </div>
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccion3.png' alt="" />
                        </div>
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccion4.png' alt="" />
                        </div>
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccion5.png' alt="" />
                        </div>
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccion6.png' alt="" />
                        </div>
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccion7.png' alt="" />
                        </div>
                        <div className="book__essential">
                            <img src='/src/assets/images/coleccion8.png' alt="" />
                        </div>
                    </div>
                </div>
                <div className="sciences">
                    <h2>Ciencias y humanidades</h2>
                    <div className="books__sciences">
                        <div className="book__science">
                            <img src='/src/assets/images/humanidades1.png' alt="" />
                        </div>
                        <div className="book__science">
                            <img src='/src/assets/images/humanidades2.png' alt="" />
                        </div>
                        <div className="book__science">
                            <img src='/src/assets/images/humanidades5.png' alt="" />
                        </div>
                        <div className="book__science">
                            <img src='/src/assets/images/humanidades4.png' alt="" />
                        </div>
                        <div className="book__science">
                            <img src='/src/assets/images/humanidades5.png' alt="" />
                        </div>
                        <div className="book__science">
                            <img src='/src/assets/images/humanidades6.png' alt="" />
                        </div>
                        <div className="book__science">
                            <img src='/src/assets/images/humanidades7.png' alt="" />
                        </div>
                    </div>
                </div>
                <div className="select">
                    <h2>Temas selectos</h2>
                    <div className="books__select">
                        <div className="book__select">
                            <img src='/src/assets/images/selecto1.png' alt="" />
                        </div>
                        <div className="book__select">
                            <img src='/src/assets/images/selecto2.png' alt="" />
                        </div>
                        <div className="book__select">
                            <img src='/src/assets/images/selecto3.png' alt="" />
                        </div>
                        <div className="book__select">
                            <img src='/src/assets/images/selecto4.png' alt="" />
                        </div>
                        <div className="book__select">
                            <img src='/src/assets/images/selecto5.png' alt="" />
                        </div>
                        <div className="book__select">
                            <img src='/src/assets/images/selecto6.png' alt="" />
                        </div>
                        <div className="book__select">
                            <img src='/src/assets/images/selecto7.png' alt="" />
                        </div>
                        <div className="book__select">
                            <img src='/src/assets/images/selecto8.png' alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
       
    </div>
);
}

export default Library;
