import "./Courses.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ModalQuestions from "../../components/Modals/Modal_Questions/ModalQuestions";
import { useNavigate, useParams } from "react-router-dom";

export const Courses = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTheme, setCurrentTheme] = useState("");

  const [course, setCourse] = useState(null);
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  const params = useParams();
  const { uni_id, area_id, course_id } = params;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:3000/api/university/${uni_id}/area/${area_id}/course/${course_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              "x-api-key":
                "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
            },
          }
        );
        setCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching areas data:", error);
      }
    };
    const fetchTopics = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:3000/api/university/${uni_id}/area/${area_id}/course/${course_id}/topics`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              "x-api-key":
                "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
            },
          }
        );
        setTopics(response.data.data);
      } catch (error) {
        console.error("Error fetching areas data:", error);
      }
    };

    fetchCourse();
    fetchTopics();
  }, [uni_id, area_id, course_id]);

  const handleOpenModal = (theme) => {
    setCurrentTheme(theme);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  function genertatePath() {
    if (course) {
      return course.path.map((item, index) => (
        <>
        {index == 0 ? "" : " > "}
          {item.name}
        </>
      ))
    }
  }

  const filteredThemes = topics.filter((theme) =>
    theme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function themeCard(theme) {
    return (
      <div className="theme__container" onClick={() => handleOpenModal(theme)}>
        <div
          className="theme__color"
          style={{ background: theme.thumbnail }}
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
           {genertatePath()}
          </h4>
          <button
            name="btnregresar"
            id="btnregresar"
            onClick={() => navigate(-1)}
          ></button>
        </div>
        <h1>{course ? course.name : ""}</h1>
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
