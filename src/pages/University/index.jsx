import "./styles-unmsm.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import ModalExam from "../../components/Modals/Modal_Exam/modalExam";

export const University = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [university, setUniversity] = useState(null);
    const [areas, setAreas] = useState([]); // Nuevo estado para almacenar las áreas
    const params = useParams();
    const {uni_id} = params;

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const fetchUniversity = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(
                `https://genial-academy-backend.onrender.com/universities/findAll`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            let uni = response.data.filter(university => university.acronym.toLowerCase() === uni_id.toLowerCase());
            setUniversity(uni[0]);
        } catch (error) {
            console.error("Error fetching university data:", error);
        }
    };

    const fetchAreas = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(
                `https://genial-academy-backend.onrender.com/areas/findByUniId/${university.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data[0]);
            setAreas(response.data);
        } catch (error) {
            console.error("Error fetching areas data:", error);
        }
    };

    // Fetch areas data from the backend
    useEffect( () =>{
        const fetchData = async () => {
            await fetchUniversity();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (university) {
            fetchAreas(university.id);
        }
    }, [university]);

    function areaCard(area) {
        return (
            <div className="areas__button" key={area.id}>
                <Link to={area.codArea.toLowerCase().normalize('NFD') // Normaliza la cadena descomponiendo los caracteres acentuados
                .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos
                .replace(/ /g, '')}>
                    <div className="button__image">
                        <img src={`/src/assets/images/${area.codArea}.png`} alt="" />
                    </div>
                </Link>
                <div className="button__text">
                    <h4>{area.codArea}</h4>
                    <p>{area.name}</p>
                </div>
            </div>
        );
    }

    function generateGrid() {
        return areas.map((area) => areaCard(area));
    }

    return (
        <div>
            <NavBar />
            <div>
                <div className="banner__unmsm">
                    <figure className="banner__figure">
                        <img
                            src="/src/assets/images/header1.png"
                            className="figure__img"
                            alt="Banner"
                        />
                    </figure>
                    <div className="banner__text">
                        <div className="text__title">
                            <h1>Bienvenido a la {university ? university.name : uni_id}</h1>
                            <img
                                src={university ? university.imgUrl : `/src/assets/images/${uni_id}.png`}
                                alt={university ? university.acronym : uni_id}
                            />
                        </div>
                        <p className="text__paragraph">
                            Descubre tu camino hacia el éxito universitario con ArdillaGenius,
                            tu compañero de estudio personalizado. En esta sección exclusiva,
                            te invitamos a explorar las oportunidades educativas que la{" "}
                            {university ? university.name : uni_id} tiene para ofrecer y toda
                            la información que necesitas saber como preuniversitario.
                        </p>
                    </div>
                </div>
            </div>
            <main>
                <section className="main__steps">
                    <h2>¿Cómo acceder al material de estudio?</h2>
                    <div className="steps">
                        <div className="steps__number">
                            <div className="number__images">
                                <img src="/src/assets/images/circulo.jpg" alt="" />
                                <img
                                    src="/src/assets/images/list1.png"
                                    className="number__img"
                                    alt=""
                                />
                            </div>
                            <div className="number__text">
                                <h3>01</h3>
                                <p>
                                    Primero debes de seleccionar una área al cual vas a postular.
                                </p>
                            </div>
                        </div>
                        <div className="steps__number">
                            <div className="number__images">
                                <img src="/src/assets/images/circulo.jpg" alt="" />
                                <img
                                    src="/src/assets/images/list2.png"
                                    className="number__img"
                                    alt=""
                                />
                            </div>
                            <div className="number__text">
                                <h3>02</h3>
                                <p>
                                    Después, se abrirá una nueva ventana con secciones dedicadas a
                                    preguntas por curso y exámenes de admisión.
                                </p>
                            </div>
                        </div>
                        <div className="steps__number">
                            <div className="number__images">
                                <img src="/src/assets/images/circulo.jpg" alt="" />
                                <img
                                    src="/src/assets/images/list3.png"
                                    className="number__img"
                                    alt=""
                                />
                            </div>
                            <div className="number__text">
                                <h3>03</h3>
                                <p>
                                    Haz clic en la sección de preguntas por curso para acceder a
                                    un conjunto diverso de recursos, incluyendo preguntas,
                                    resúmenes y libros.
                                </p>
                            </div>
                        </div>
                        <div className="steps__number">
                            <div className="number__images">
                                <img src="/src/assets/images/circulo.jpg" alt="" />
                                <img
                                    src="/src/assets/images/list4.png"
                                    className="number__img"
                                    alt=""
                                />
                            </div>
                            <div className="number__text">
                                <h3>04</h3>
                                <p>
                                    Una vez dentro, podrás elegir un curso específico y explorar
                                    detalladamente las preguntas, resúmenes y libros relacionados
                                    con ese tema en particular.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main__card">
                    <div className="card">
                        <img src="/src/assets/images/explora.png" alt="" />
                        <div className="card__text">
                            <p className="card__paragraph">
                                Explora, Sueña, Descubre el área que pertenece tu carrera con un
                                clic
                            </p>
                            <button className="card__button">
                                <Link to={"area"}> Descubre tu area</Link>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="main__areas">
                    <h2>Áreas</h2>
                    <div className="areas">{generateGrid()}</div>
                </section>
                <section className="main__card">
                    <h2>Información sobre el formato de exámenes de admisión</h2>
                    <div className="card">
                        <img
                            src="/src/assets/images/informacion.png"
                            className="card__img"
                            alt=""
                        />
                        <div className="card__text">
                            <p className="card__paragraph">
                                ¿Quisieras saber cuántas preguntas vienen por cada área?
                                Descúbrelo con un solo clic
                            </p>
                            <div className="buttonContainer">
                                <button onClick={handleOpenModal}>
                                    Estructura de examen de admisión
                                </button>
                            </div>
                            <ModalExam isOpen={isModalOpen} onClose={handleCloseModal} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default University;
