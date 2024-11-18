import "./Courses.css";
// import axios from "axios";
import { useState, useEffect } from "react";
import ModalQuestions from "../../components/Modals/Modal_Questions/modalQuestion";
import { useNavigate, useParams } from "react-router-dom";

export const Courses = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTheme, setCurrentTheme] = useState("");

  const [university, setUniversity] = useState(null);
  const [area, setArea] = useState(null);

  const navigate = useNavigate();

  const params = useParams();
  const { uni_id, area_id, course_id } = params;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAreas = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://genial-academy-backend.onrender.com/areas/findAll",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data[0]);
        let a = response.data.filter(
          (areas) =>
            areas.codArea
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/ /g, "") === area_id.toLowerCase()
        );
        setArea(a[0]);
      } catch (error) {
        console.error("Error fetching areas data:", error);
      }
    };

    fetchAreas();
  }, []);

  useEffect(() => {
    const fetchUniversity = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          /**  /home/unmsm/ */
          `https://genial-academy-backend.onrender.com/universities/findAll`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let uni = response.data.filter(
          (university) =>
            university.acronym.toLowerCase() === uni_id.toLowerCase()
        );
        setUniversity(uni[0]);
      } catch (error) {
        console.error("Error fetching university data:", error);
      }
    };

    fetchUniversity();
  }, [uni_id]);

  const handleOpenModal = (theme) => {
    setCurrentTheme(theme);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  function getThemesById(uni_id, area_id, course_id) {
    return [
      {
        id: "lacomunicacion",
        name: "La comunicación",
      },
      {
        id: "planesdellenguaje",
        name: "Planes del lenguaje",
      },
      {
        id: "foneticayfonologia",
        name: "Fonética y fonología",
      },
      {
        id: "concurrenciadevocales",
        name: "Concurrencia de vocales",
      },
      {
        id: "tildacion",
        name: "Tildación",
      },
      {
        id: "morfologia",
        name: "Morfología",
      },
      {
        id: "semantica",
        name: "Semántica",
      },
      {
        id: "sustantivo",
        name: "Sustantivo",
      },
      {
        id: "eladjetivoylosdeterminantes",
        name: "El adjetivo y los determinantes",
      },
      {
        id: "elpronombre",
        name: "El pronombre",
      },
      {
        id: "elverboysusclases",
        name: "El verbo y sus clases",
      },
      {
        id: "elverbo",
        name: "El verbo",
      },
      {
        id: "eladverbio",
        name: "El adverbio",
      },
      {
        id: "laconjuncionylapreposicion",
        name: "La conjunción y la preposición",
      },
      {
        id: "laoracion",
        name: "La oración",
      },
      {
        id: "elpredicado",
        name: "El predicado",
      },
      {
        id: "oracioncompuestaI",
        name: "Oración compuesta I",
      },
      {
        id: "oracioncompuestaII",
        name: "Oración compuesta II",
      },
    ];
  }
  const THEMES = getThemesById(uni_id, area_id, course_id);

  const filteredThemes = THEMES.filter((theme) =>
    theme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colors = ["#D99", "#DC8", "#8D8", "#DA5", "#78E"];

  function themeCard(theme, index) {
    return (
      <div className="theme__container" onClick={() => handleOpenModal(theme)}>
        <div
          className="theme__color"
          style={{ background: colors[index] }}
        ></div>
        <div className="themes__title">{theme.name}</div>
      </div>
    );
  }

  function generateGrid() {
    return filteredThemes.map((theme, index) => themeCard(theme, index % 5));
  }

  return (
    <div>
      <main>
        <div id="navigation">
          <h4 id="btnunmsm">
            {university ? university.acronym : uni_id} &gt;{" "}
            {area ? area.codArea : area_id} &gt; {course_id}
          </h4>
          <button
            name="btnregresar"
            id="btnregresar"
            onClick={() => navigate(-1)}
          ></button>
        </div>
        <h1>{course_id.toUpperCase()}</h1>
        <div className="container-search">
          <form action="">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
        <div className="themes__main">
          {generateGrid()}
          <ModalQuestions
            theme={selectedTheme}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </main>
    </div>
  );
};

export default Courses;
